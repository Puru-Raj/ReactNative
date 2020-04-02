import React from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'
import ResultDetails from "../components/ResultDetails"
const ResultList=({header,filteredResults,navigation})=>{
    return(
    <View>
    <Text style={styles.text}>{header} </Text>
    <FlatList horizontal showsHorizontalScrollIndicator={false} data={filteredResults} renderItem={({item})=>{
        return <ResultDetails navigation={navigation} item={item} />
        }} 
        keyExtractor={filteredResults=>filteredResults.id} />
    </View>
    )
}

const styles=StyleSheet.create({
    text:{
        marginTop:16,
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
    },
})
export default ResultList