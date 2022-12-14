import React from "react";
import {Text, GestureResponderEvent, View, Pressable, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { textScaler } from "../functions/textScaler";


interface ModalProps {
    OnAccept: () => void;
    OnCancel: () => void;
}

export const CompleteDungeonModal: React.FC<ModalProps> = ({ OnAccept, OnCancel }) => {

    const handleComplete = (e: GestureResponderEvent) => {
        e.preventDefault();
        OnAccept();
    }

    const handleCancel = (e: GestureResponderEvent) => {
        e.preventDefault()
        OnCancel()
    }

    return (
        <View style={[styles.modal_container, {
            height: "20%"
        }]}>
            <Text style={styles.modal_text}>Complete Dungeon?</Text>
            <View style={styles.button_container}>
                <Pressable style={styles.complete_modal_buttons} onPressIn={(e) => handleComplete(e)}>
                    <Svg key="check" viewBox='0 0 18 18'>
                        <Path d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                            fill="green" />
                    </Svg>
                </Pressable>
                <Pressable style={styles.complete_modal_buttons} onPressIn={(e) => handleCancel(e)}>
                    <Svg key="cross" viewBox='0 0 56 56'>
                        <Path d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21   L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831   c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0   C47.673,42.282,47.672,38.54,45.363,36.234z"
                            fill="red" />
                    </Svg>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal_container: {
        position: 'absolute',
        backgroundColor: "white",
        borderRadius: 5,
        width: '80%',
        marginLeft: '10%',
        marginTop: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-evenly",
        zIndex: 1,
        borderColor:'#001622',
        borderWidth:.5
    },
    modal_text:{
        fontSize: textScaler(20),
        textAlign: 'center',
        fontFamily:'Beleren'
    },
    button_container:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: "space-around"
    },
    complete_modal_buttons:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 50,
        borderRadius: 5,
    },
    button_text:{
        color: 'white',
        textAlign:'center',
        fontFamily:'Beleren'
    }
})