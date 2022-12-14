import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import { GlobalPlayerData, PlanarData, StoredData } from "."
import globalPlayerReducer, { GlobalPlayerAction } from "./reducers/globalPlayerReducer";
import generatePlanarDeck from "./functions/planarDeck";
import { OptionsContext, OptionsContextProps } from "./OptionsContext";
import newGameData from "./functions/newGame";
import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types";

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
*)build command for apk: eas build -p android --profile preview
  -eas build uses .gitignore to access files, so change access to assets files after build so it's not uploaded to github
*) Animated.View prevents any child components onPress and onLongPress from firing normally,
  Because the touch event is intercepted by the Animated API. 
  This may be fixable in the future when I know more about Animated api events.
1) 2 people can't touch screen at the same time (swipe function bug), fix that.
2) instructions screen?
3) reverse p1 and p2 when 2 players
*/

/*
Dungeon data tracked in globalPlayerData to pass to Dungeon Screen, since only 1 screen
*/
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { totalPlayers, startingLife, savedData } = useContext(OptionsContext) as OptionsContextProps
  const [currentMonarch, setCurrentMonarch] = useState<string>()
  const [currentInitiative, setCurrentInitiative] = useState<string>()
  const [globalPlayerData, dispatchGlobalPlayerData] = useReducer<(state: GlobalPlayerData, action: GlobalPlayerAction) => any>(globalPlayerReducer, {})
  const [planarData, setPlanarData] = useState<PlanarData>({ currentPlane: '', deck: [], discard: [] })

  /*
  set initial player states for dungeon tracking (to pass to Dungeon screen)
  */
  useEffect(() => {

    dispatchGlobalPlayerData({
      field: 'init',
      value: newGameData( totalPlayers, startingLife, savedData ),
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
    if (Object.keys(globalPlayerData).length) {
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

  /*
  parse saved data : names, colors.
  sets as default options through rest of app
  */
  useEffect(() => {
    if (savedData && Object.keys(globalPlayerData).length > 0) {
      let newPlayerData = globalPlayerData;
        savedData.forEach((arr: KeyValuePair) => {
          if(arr[0].includes('screenName')){
            newPlayerData[arr[0].charAt(0)].screenName = arr[1]
          }
          if(arr[0].includes('colors')){
            newPlayerData[arr[0].charAt(0)].colors = JSON.parse(arr[1] as string)
          }
        })   
    }
  }, [savedData])

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