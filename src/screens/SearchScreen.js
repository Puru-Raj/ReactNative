import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar'
import Yelp from "../api/yelp"
import ResultList from "../components/ResultList"

const SearchScreen = () => {

    const [Term, setTerm] = useState("")
    const [result, setResult] = useState([])
    const [errMessage, seterrMessage] = useState('')
    const api = async () => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: Term,
                    location: 'deactur alabama'
                }
            })
            setResult(response.data.businesses)
        }
        catch (e) {
            seterrMessage("Please Check your internet connection or try again later")
        }
    }

    useEffect(()=>{
        api('Waffle House')
    },[])

    // console.log(result)
    return (
        <View>
            <SearchBar term={Term} submit={api} changeText={setTerm} />

            <Text style={{ textAlign: 'center' }}>
                {errMessage && !(result.length > 0) ? <Text style={Styles.text}>{errMessage}</Text> : <Text style={Styles.text1}>We have found {result.length} results</Text>}{"\n"}
            </Text>

            <ResultList  header="Cost Effective" />
            <ResultList  header="Bit Pricer" />
            <ResultList  header="Big Spender !" />
        </View>
    )
}

const Styles = StyleSheet.create({
    text:
    {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',

    },
    text1:
    {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',

    },



});

export default SearchScreen;



