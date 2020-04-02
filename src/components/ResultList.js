import React from 'react'
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultDetails from "../components/ResultDetails"
import {withNavigation} from 'react-navigation'

const ResultList=({header,filteredResults,navigation})=>{
    if (!filteredResults.length){
        return null;
    }

    return(
    <View>
    <Text style={styles.text}>{header} </Text>
    <FlatList horizontal showsHorizontalScrollIndicator={false} data={filteredResults} renderItem={({item})=>{
        return (
        <TouchableOpacity  onPress={()=>{navigation.navigate("Results",{id:item.id})}}> 
        <ResultDetails item={item} />
        </TouchableOpacity>
        )
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
export default withNavigation(ResultList);