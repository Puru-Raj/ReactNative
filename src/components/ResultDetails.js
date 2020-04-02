import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'



const ResultDetails = ({item}) => {
    return (
       <View>
        <Image style={styles.image}
         source={{uri: item.image_url}} />
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.textBottom}>{item.rating} Stars, {item.review_count} reviews
        </Text>
    </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        marginLeft:50,
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:12,
    },
    textBottom:{
        textAlign:'center',
    }
    ,image:{  
        height:150,
        width:180,
        marginHorizontal:5,
        borderRadius:8,
        marginTop:10,
     },
})
export default ResultDetails
