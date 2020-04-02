import React,{useState,useEffect} from 'react'
import {Text,View,Image,StyleSheet,FlatList} from 'react-native'
import ResultDetails from '../components/ResultDetails'
import Yelp from "../api/yelp"

    const Results=({navigation})=>{
    const id= navigation.getParam('id')
    const [result,setResult]=useState(null)
    const getResult= async (id)=>{
        const response = await Yelp.get(`/${id}`)
        setResult(response.data);
    }
    useEffect(()=>{getResult(id)},[])

    if(!result){
        return null;

    }
    return(
        <View style={styles.parent}>


            <Text style={styles.text}>Images</Text>


            <FlatList keyExtractor={item=>item} data={result.photos} renderItem={({item})=>{
                return(
                    <Image style={styles.image}
                    source={{uri: item}} />
                )
            }} 
            />
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        height:350,
        width:385,
        marginHorizontal:5,
        borderRadius:8,
        marginTop:10,
    },
    parent:{
    },
    text:{
        fontSize:30,
        color:'black',
        fontWeight:"400",
        textAlign:'center',
    }
})

export default Results