import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import Yelp from "../api/yelp"
import ResultList from "../components/ResultList"

const SearchScreen = ({navigation}) => {
    const [Term, setTerm] = useState("")
    const [result, setResult] = useState([])
    const [errMessage, seterrMessage] = useState('')
    const api = async () => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: Term,
                    location: 'New York',
                }
            })
            setResult(response.data.businesses)
        }
        catch (e) {
            seterrMessage("Please Check your internet connection or try again later")
        }
    }

    useEffect(()=>{
        api('pizza')
    },[])


    const filterbyResults=(price)=>{
        return(
            result.filter((result)=>{return result.price===price})
        )
    }

    return (
        <> 
            <SearchBar term={Term} submit={api} changeText={setTerm}/>
            <ScrollView><ResultList  header="Cost Effective" filteredResults={filterbyResults('$')} />
            <ResultList navigation={navigation} filteredResults={filterbyResults('$$')} header="Bit Pricer" />
            <ResultList navigation={navigation} filteredResults={filterbyResults('$$$')} header="Big Spender !" />
            <ResultList navigation={navigation} filteredResults={filterbyResults('$$$$')} header="24K Magic !!" /></ScrollView>
            
        </>
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



