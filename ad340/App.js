import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
   padding: 30,
   backgroundColor: '#246EE9',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color:"white",
  },
  paragraph:{
    fontSize: 20,
    marginTop:30,
    color:"white"
  },
  list:{
    marginTop:30,


  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',

  },
});

var title = "Joshua's Project";

const App = () => {
  return (

    <View style={styles.container}>
    <Text style={styles.titleText} > {title} </Text>
     <Text style={styles.paragraph}>This is my App. It is a basic react application.
        The application is a React Native project designed to show a title, paragraph and list.
        Here you will see what I have created within the AD340 class for the applications development
        program.
     </Text>
      <FlatList style={styles.list}
        data={[
          {key: 'Christams movie'},
          {key: 'Romance Movie'},
          {key: 'Comedy Movie'},
          {key: 'Christmas Romance Movie'},
          {key: 'Christmas Romance Comedy Movie'},
          {key: 'Airplane Movie'},
          {key: 'Another Movie'},
          {key: 'Not Another Movie'},
          {key: 'Just Another Movie'},
          {key: 'T.V. Movies'},
          {key: 'Airplane Movie'},
          {key: 'Another Movie'},
          {key: 'Not Another Movie'},
          {key: 'Just Another Movie'},
          {key: 'T.V. Movies'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}


export default App;