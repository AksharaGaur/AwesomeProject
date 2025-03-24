import { Text, View, Button, TouchableOpacity, StyleSheet,TextInput, FlatList, SectionList} from 'react-native';
import React from 'react';
import CompanyData from './components/companydata';
import MyButton from './components/myButton'
import { useState } from 'react';
//import UserData from './components/userdata';
import LoginData from './components/LoginData';

function App() {
  const Users=[
    {
      id:101,
      name:"Sam",
      email:"sam@123",
      data:["C", "C++"]
    },
    {
      id:102,
      name:"Tom",
      email:"Tom@123",
      data:["Python", "Django"]
    },
    {
      id:103,
      name:"Herry",
      email:"harry@123",
      data:["HTML", "CSS"]
    },
    {
      id:104,
      name:"Joy",
      email:"joy@123",
      data:["JS", "React js"]
    },
    {
      id:105,
      name:"Kerry",
      email:"kerry@123",
      data:["PHP","Angular"]
    },

  ]
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>List with Flat List component</Text>
      <SectionList
      sections={Users}
      renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=>
      <Text style={{fontSize:35,color:'blue'}}>{name}</Text>}
      />
     
      {/* <FlatList data={Users} 
      renderItem={({item})=><UserData item={item}/>}
        
    
      
    />
      */}
    </View>
  

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