import { Text, View, Button, TouchableOpacity, StyleSheet,TextInput, FlatList, SectionList} from 'react-native';
import React from 'react';
import CompanyData from './components/companydata';
import MyButton from './components/myButton'
import { useState } from 'react';
//import UserData from './components/userdata';
import LoginData from './components/LoginData';
import AppNavigator from './components/navigation/AppNavigator';

function App() {
  
  return (
    <AppNavigator/>

  );
}
 
// const UserData=(props: { item: any; })=>{
//   const item=props.item;
//   return(
//     <View style={styles.box}>
//       <Text style={styles.item}>{item.name}</Text>
//       <Text style={styles.item}>{item.email}</Text>
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   item:{
    
//     color:'orange',
//     margin:2,
//     fontSize:25,
//     flex:1,
//     textAlign:'center'
//   }, 
//   box:{
//     flexDirection:'row',
//     borderWidth:2,
//     borderColor:'orange',
//     marginBottom:10

//   }
// })



export default App;