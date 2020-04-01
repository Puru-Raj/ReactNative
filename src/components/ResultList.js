import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const ResultList=({header})=>{
    return(
    <View>
    <Text style={styles.text}>{header}</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:15,
    },
})
export default ResultList