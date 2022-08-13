import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
const GetAQuote = () => {
    const [Distance, setDistance] = useState(1);
    const [km,setKm]=useState(1)
    const [From, setFrom] = useState(1);
    const [To, setTo] = useState(1);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'redline-redline-zipcode.p.rapidapi.com',
            'X-RapidAPI-Key': '44211f1c50mshdf4be7888f46202p164b8fjsn32ac28ce6a1c'
        }
    };
   const giveQuote = () => {
alert('hello')
    // fetch(`https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/${From}/${To}/km`, options)
    //         .then(response => response.json())
    //         .then(data => setDistance(data.Distance))
    //         .catch(err => console.log(err))
    //         //  options)
    //         // .then(response => response.json())
    //         // .then(response => console.log(response))
    //         // .catch(err => console.error(err));
     }


     const result=  (Distance)*km;
 const totalkm= Distance-km;
 const Price=km/100;
  return (
      <>
    <View style={styles.conatiner}>
      <Text style={styles.heading}>Get A Quote</Text>
    </View>
    <SafeAreaView style={styles.body}>
        <Text style={styles.heading}>Enter ZIP-CODES of From and To the destination in which you want to deliver parcel</Text>

        <View style={styles.signUpBtn}>
            <View style={styles.from}>
                <Text style={styles.buttonTextSignUp}>From</Text>
            </View>
            <TextInput 
                 onChangeText={(text)=>setDistance(parseInt(text))}
                 
            style={styles.input} keyboardType='numeric' placeholderTextColor='#000' placeholder="Enter your zip code" />
        </View>
        <View style={styles.signUpBtn}>
        <View style={styles.from}>
            <Text style={styles.buttonTextSignUp}>To</Text>
        </View>
        <TextInput 
             onChangeText={(text)=>setKm(parseInt(text))}
             
        style={styles.input} keyboardType='numeric' placeholderTextColor='#000' placeholder="Enter your zip code" />
    </View>
        <View style={styles.signUpBtn}>
            <View style={styles.from}>
                <Text style={styles.buttonTextSignUp}>To</Text>
            </View>
            <TextInput style={styles.input} 
            onChange={(text)=>setKm(parseInt(text))}
         keyboardType='numeric' placeholderTextColor='#000' placeholder="Enter your zip code" />
        </View>

        <TouchableOpacity style={styles.quoteBtn} onPress={giveQuote} >
            <Text style={styles.quoteBtnText} >Get Quote</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.quote}>Distance: {totalkm} km </Text>
            <Text style={styles.quote}>Estimated cost Rs: {Price}    </Text>
           <Text>{result}</Text>
        </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    conatiner: {
        paddingVertical: '5%',
        alignItems: 'center',
        backgroundColor: '#ebbf3b',
    },
    heading: {
        fontSize: 20,
        fontWeight: '900',
        marginTop: '5%',
        textAlign: 'center',
        marginHorizontal: '5%',
        marginBottom: '5%',
    },
    body: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    signUpBtn: {
        // backgroundColor: 'red',
        width: '90%',
        paddingVertical: '3%',
        borderRadius: 10,
        // marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    from: {
        backgroundColor: 'red',
        width: '40%',
        paddingVertical: '3%',
        borderRadius: 10,
        
    },
    input: {
        width: '50%',
        borderColor: '#ebbf3b',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        marginHorizontal: '5%',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        // placeholder: 'black',
       
    },
   
    buttonTextSignUp: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: '500',
    },
    quoteBtn: {
        backgroundColor: '#ebbf3b',
        width: '90%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '1%',
        borderRadius: 5,
        paddingHorizontal: '5%',
    },
    quoteBtnText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
    }
    
})

export default GetAQuote