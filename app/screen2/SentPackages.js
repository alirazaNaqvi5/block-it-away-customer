import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function SentPackages() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {
                id: '12434365',
                address: 'Trafalgar Square, London',
                dateAndTime: 'April 1, 2022, 9:30 AM '
            },
            {
                id: '12434366',
                address: 'Picadilly, London',
                dateAndTime: 'April 1, 2022, 9:30 AM '
            },
            {
                id: '6456366',
                address: 'Silent Hill, London',
                dateAndTime: 'April 16, 2022, 8:30 AM '
            },
            {
                id: '12476576',
                address: 'Honeydukes, London',
                dateAndTime: 'April 14, 2022, 9:30 AM '
            },
            {
                id: '78678365',
                address: 'Hogwarts, London',
                dateAndTime: 'April 13, 2022, 7:30 AM '
            },
            {
                id: '35354366',
                address: 'Howling Valley, London',
                dateAndTime: 'April 10, 2022, 5:30 AM '
            },
            {
                id: '545434367',
                address: 'Privet Drive, London',
                dateAndTime: 'April 9, 2022, 1:30 AM '
            },
            
            
          ]}
          renderItem={
              ({item}) => 
               <View style={styles.item} key={item.id}>
                   <Text style={styles.itemIdStyle}>
                        {item.id}
                    </Text>
                    <Text style={styles.itemIdStyle}>
                        {item.address}
                    </Text>
                    <Text style={styles.itemIdStyle}>
                        {item.dateAndTime}
                    </Text>
               </View>
                
            }
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor:'#1c1e1f',
    },

    item: {
      flex: 1,
      backgroundColor: '#22262b',
      elevation: 10,
      marginVertical: '1%',
      marginHorizontal: '3%',
      padding: '5%',
      borderRadius: 9,
      
    },

    itemIdStyle: {
        color: 'white',
        fontSize: 12
    }

  });


