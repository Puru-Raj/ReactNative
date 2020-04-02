import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const SearchBar=({Term,changeText,submit})=>{
    return(
        <View>
            <View style={Styles.SeachStyle} >
                <Ionicons name="md-search" size={35}></Ionicons>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={Styles.textinput}
                    placeholder="Search" placeholderTextColor="rgb(121, 124, 128)"
                    onChangeText={(newValue) => { changeText(newValue)}}
                    onEndEditing={submit}
                    value={Term} />
            </View>
        </View>
    )
}


const Styles=StyleSheet.create({SeachStyle:{
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
    backgroundColor:'rgb(218, 220, 224)',
    height:45,
    borderRadius:10,
    margin:20,
},
textinput:{
    flex:1,
    paddingHorizontal:7,
    fontSize:17,
}

});

export default SearchBar;




