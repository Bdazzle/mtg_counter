import AsyncStorage from "@react-native-async-storage/async-storage"
import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types"
import React, { createContext, useEffect, useState } from "react"
import { StoredData } from "."

export interface OptionsContextProps {
    startingLife: number,
    setStartingLife: React.Dispatch<React.SetStateAction<number>>,
    gameType: string,
    setGameType: React.Dispatch<React.SetStateAction<string>>,
    totalPlayers: number,
    setTotalPlayers: React.Dispatch<React.SetStateAction<number>>,
    savedData : StoredData,
}

export const OptionsContext = createContext({} as OptionsContextProps)

export const OptionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [gameType, setGameType] = useState<string>('normal')
    const [totalPlayers, setTotalPlayers] = useState<number>(2)
    const [startingLife, setStartingLife] = useState<number>(20)
    const [savedData, setSavedData] = useState<readonly KeyValuePair[]>([])

    const getSavedData = async () => {
        try {
            const allKeys = await AsyncStorage.getAllKeys()
            const allSaved = await AsyncStorage.multiGet(allKeys)
            setSavedData(allSaved)
        }
        catch (e) {
            console.log(`error getting saved player names`, e)
        }
    }

    useEffect(() => {
        // const clearStorage = async () =>{
        //     try {
        //         await AsyncStorage.clear()
        //     }
        //     catch(e){
        //         console.log('error clearing storage', e)
        //     }
        // }
        // clearStorage()
        getSavedData()
    },[])

    return <OptionsContext.Provider value={{
        totalPlayers: totalPlayers,
        setTotalPlayers: setTotalPlayers,
        startingLife: startingLife,
        setStartingLife: setStartingLife,
        gameType: gameType,
        setGameType: setGameType,
        savedData: savedData,
    }}>{children}</OptionsContext.Provider>
}