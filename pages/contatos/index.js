import React from 'react';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, RefreshControl,SafeAreaView, ScrollView } from 'react-native';

//api
import * as Contacts from 'expo-contacts';

const [name, setName] = useState(null);

export default function Contatos() {
    useEffect(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });
  
          if (data.length > 0) {
            const contact = data[0];
            console.log(contact);
          }
        }
      })();
    }, []);


    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  
    return (

        <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Contatos: {name}</Text>
      </View>

      </ScrollView>
    </SafeAreaView>
    );
  }

  export default Contatos;