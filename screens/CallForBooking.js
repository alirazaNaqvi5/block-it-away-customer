import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'


const CallForBooking = () => {
  return (
      <>
    {/* <View style={styles.conatiner}>
      <Text style={styles.heading}>Call for Booking</Text>
    </View> */}
    <View style={styles.body}>
        <Text style={styles.title}>General shipping</Text>
    </View>
    <View style={styles.card}>
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>{
          Linking.openURL('mailto:ayesha.kanwal74@gmail.com')
        }}>
          <Text style={styles.cardText}>ayesha.kanwal74@gmail.com</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>{
          Linking.openURL('tel:03105621137')
        }}>
          <Text style={styles.cardText}>+923105621137</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardText}>MON-SUN    09:00-23:00</Text>
      </View>
    </View>
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
    },
    title: {
        fontSize: 15,
        fontWeight: '900',
        marginTop: '5%',
        textAlign: 'left',
    },
    body: {
        marginHorizontal: '5%',
    },
    card: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        borderColor: '#ebbf3b',
        borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2%',
    },
    cardText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'left',
    }
})

export default CallForBooking