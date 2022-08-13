import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ReceivedPackages() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {
                id: '12365',
                address: 'Trafalgar Square, Bristol',
                dateAndTime: 'April 1, 2022, 9:30 AM '
            },
            {
                id: '126',
                address: 'Picadilly, Bristol',
                dateAndTime: 'April 1, 2022, 9:30 AM '
            },
            {
                id: '6466',
                address: 'Silent Hill, Bristol',
                dateAndTime: 'April 16, 2022, 8:30 AM '
            },
            {
                id: '12476',
                address: 'Honeydukes, Bristol',
                dateAndTime: 'April 14, 2022, 9:30 AM '
            },
            {
                id: '786365',
                address: 'Hogwarts, Bristol',
                dateAndTime: 'April 13, 2022, 7:30 AM '
            },
            {
                id: '35356',
                address: 'Howling Valley, Bristol',
                dateAndTime: 'April 10, 2022, 5:30 AM '
            },
            {
                id: '545',
                address: 'Privet Drive, Bristol',
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
        color: '#ffffff',
        fontSize: 12
    }

  });


