import React from 'react'
import { Appbar } from 'react-native-paper'



export default function MainAppbar({navigation, back}) {
    return(
    <Appbar.Header
        elevated={true}>
            {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
            <Appbar.Content title="MD Nav Demo"/>
            {!back && <Appbar.Action icon="arrow-right"
            onPress={() => navigation.navigate("Second")}/>}
        </Appbar.Header>
        )
}