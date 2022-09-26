import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import { GlobalPlayerData, PlanarData } from "."
import { startingColors } from "./constants/Colors";
import globalPlayerReducer, { GlobalPlayerAction } from "./reducers/globalPlayerReducer";
import generatePlanarDeck from "./functions/planarDeck";
import { OptionsContext, OptionsContextProps } from "./OptionsContext";

export interface GameContextProps {
  currentMonarch: string | undefined;
  setCurrentMonarch: React.Dispatch<React.SetStateAction<string | undefined>>,
  currentInitiative: string | undefined,
  setCurrentInitiative: React.Dispatch<React.SetStateAction<string | undefined>>,
  globalPlayerData: GlobalPlayerData,
  dispatchGlobalPlayerData: React.Dispatch<GlobalPlayerAction>
  planarData: PlanarData,
  setPlanarData: React.Dispatch<React.SetStateAction<PlanarData>>,
}

export const GameContext = createContext({} as GameContextProps)

/*
TO DO
1) change commander damage line height
*)build command for apk: eas build -p android --profile preview
*) Animated.View prevents any child components onPress and onLongPress from firing normally,
  Because the touch event is intercepted by the Animated API. 
  This may be fixable in the future when I know more about Animated api events.
*/

/*
Dungeon data tracked in globalPlayerData to pass to Dungeon Screen, since only 1 screen
*/
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { totalPlayers, startingLife } = useContext(OptionsContext) as OptionsContextProps
  const [currentMonarch, setCurrentMonarch] = useState<string>()
  const [currentInitiative, setCurrentInitiative] = useState<string>()
  const [globalPlayerData, dispatchGlobalPlayerData] = useReducer<(state: GlobalPlayerData, action: GlobalPlayerAction) => any>(globalPlayerReducer, {})
  const [planarData, setPlanarData] = useState<PlanarData>({ currentPlane: '', deck: [], discard: [] })

  /*
  set initial player states for dungeon tracking (to pass to Dungeon screen)
  */
  useEffect(() => {
    const playersArr = [...Array(totalPlayers).keys()].map(x => x + 1)

    const playersObj = playersArr.reduce((acc, curr: number | string, i: number) => {
      /*
      cdamage creates an object out of an array of totalPlayers/all playerIDs, 
      filters out the current player, and makes a [playerID] : {} out of the remaining players.
      */
      const cdamage = playersArr.filter((n) => n !== curr).reduce((o, key) => ({ ...o, [key]: 0 }), {})
      return {
        ...acc, [curr]: {
          colors: startingColors[i],
          screenName: `Player ${i + 1}`,
          counterData: {},
          lifeTotal: startingLife,
          commander_damage: cdamage
          // dungeonCompleted : true
        }
      }
    }, {} as GlobalPlayerData)

    dispatchGlobalPlayerData({
      field: 'init',
      value: playersObj as GlobalPlayerData,
      playerID: 0
    })

    const newPlanarDeck = generatePlanarDeck(totalPlayers)
    setPlanarData({
      currentPlane: newPlanarDeck[0],
      deck: newPlanarDeck,
      discard: []
    })

  }, [totalPlayers])

  /*
  put this in StartingLife.tsx?
  */
  useEffect(() => {
    if(Object.keys(globalPlayerData).length){
      let playersObj = globalPlayerData
      for (let playerID in playersObj) {
        playersObj[playerID].lifeTotal = startingLife
      }
      dispatchGlobalPlayerData({
        field: 'init',
        value: playersObj as GlobalPlayerData,
        playerID: 0
      })
    }
  }, [startingLife])

  

  return <GameContext.Provider value={{
    currentMonarch: currentMonarch,
    setCurrentMonarch: setCurrentMonarch,
    currentInitiative: currentInitiative,
    setCurrentInitiative: setCurrentInitiative,
    globalPlayerData: globalPlayerData as GlobalPlayerData,
    dispatchGlobalPlayerData: dispatchGlobalPlayerData,
    planarData: planarData,
    setPlanarData: setPlanarData
  }}>{children}</GameContext.Provider>
}