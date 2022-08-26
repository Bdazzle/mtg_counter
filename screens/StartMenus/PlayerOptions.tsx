import React, { useContext } from "react"
import { Text, StyleSheet, KeyboardAvoidingView, NativeSyntheticEvent, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, TextInputSubmitEditingEventData } from "react-native"
import MenuNavButtons from "../../components/MenuNavButtons"
import { GameContext, GameContextProps } from "../../GameContext"
import { StartMenuStackNavProps } from "../.."
import FadeContainer from "../../components/FadeContainer"
import { useNavigation } from "@react-navigation/native"

interface ColorSquareParams {
    primary: string,
    secondary: string,
    playerID: number
}
/*
make sure you can't pick the same colors for primary and secondary
*/
const ColorSquare: React.FC<ColorSquareParams> = ({ primary, secondary, playerID }) => {
    const navigation = useNavigation<StartMenuStackNavProps>()

    const showColorMenu = () => {
        navigation.navigate('ColorMenu', {
            playerID: playerID,
            primary: primary,
            secondary: secondary
        })
    }

    return (
        <TouchableWithoutFeedback style={styles.color_touch}
            onPress={() => showColorMenu()}
        >
            <View style={[styles.color_square_outter,{
                backgroundColor: secondary
            }]}>
                <View style={[styles.color_square_inner, {
                    backgroundColor: primary,
                }]}>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}

interface PlayerRowParams {
    playerID: number;
}

const PlayerRow: React.FC<PlayerRowParams> = ({ playerID }) => {
    const { globalPlayerData, dispatchGlobalPlayerData } = useContext(GameContext) as GameContextProps

    const handleNameChange = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        e.preventDefault()
        dispatchGlobalPlayerData({
            playerID: playerID,
            field: 'screenName',
            value: e.nativeEvent.text
        })
    }

    return (
        <KeyboardAvoidingView style={styles.row_wrapper} >
            <ColorSquare primary={globalPlayerData[playerID].colors.primary}
                secondary={globalPlayerData[playerID].colors.secondary}
                playerID={playerID}
            />
            <TouchableOpacity style={styles.name_toucheable}>
                <TextInput style={styles.player_name}
                    defaultValue={globalPlayerData[playerID].screenName}
                    onSubmitEditing={(e) => handleNameChange(e)}
                ></TextInput>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

/*
creating global player object is handled in game context as totalPlayers is updated
*/
const PlayerOptions = ({ }) => {
    const { globalPlayerData } = useContext(GameContext) as GameContextProps

    return (
        <View style={styles.container}
        testID="player_name"
        >
            <Text style={styles.title_text} >Player Names</Text>
            {Object.keys(globalPlayerData).map((p: string) => {
                return <PlayerRow playerID={Number(p)} key={`Player ${p}`} />
            })}
            <FadeContainer style={styles.fade_container}>
                <MenuNavButtons navTo="Game" navBack="TotalPlayers" labelBack="Total Players" labelTo="Start Game" />
            </FadeContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    title_text: {
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 40,
        fontFamily: "Beleren"
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignContent: 'space-around',
    },
    row_wrapper: {
        padding: 5,
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'space-around',
    },
    name_toucheable: {
        width: '65%',
        borderBottomColor: 'white',
        borderWidth: 2,
    },
    player_name: {
        height: '100%',
        color: 'white',
        width: '100%',
        fontSize: 30,
        fontFamily: "Beleren"
    },
    color_touch: {
        height: '100%',
        
    },
    color_square_outter :{
        borderColor: 'white',
        borderWidth: .5,
        borderRadius: 5,
        height: '100%',
        width: '25%',
        justifyContent:'center',
        alignItems:'center'
    },
    color_square_inner: {
        borderRadius: 5,
        height: '75%',
        width: '75%',
    },
    fade_container: {
        height: '20%',
        width: '100%',
    }
})

export default PlayerOptions