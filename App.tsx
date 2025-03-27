import { Text, View, Button, TouchableOpacity, StyleSheet,TextInput, FlatList, SectionList} from 'react-native';
import React from 'react';
import CompanyData from './components/companydata';
import MyButton from './components/myButton'
import { useState } from 'react';
//import UserData from './components/userdata';
import LoginData from './components/LoginData';
import AppNavigator from './components/navigation/AppNavigator';
import SearchBox from './components/screens/SearchBox';
import StoreNavigator from './src/navigation/StoreNavigator';

const App=()=> {

  // const [count,setCount]=useState(0)
  
  
    return (

    <View style={{flex:1,marginTop:50}}>
      <StoreNavigator/>

      </View> 
    )
  }
      {/* <AppNavigator/> */}
      {/* <SearchBox/> */}
    {/* <StoreNavigator/> */}
       {/* <Text style={{fontSize:35 , marginTop:25, marginBottom:20, color:'blue', fontWeight:'bold'}}>Component Did Update</Text>
       <Text style={styles.title}>Count : {count}</Text>
       <View style={styles.buttonContainer}>
       <Button title='Increase Count' onPress={()=>setCount(count+1)}/>
       <Button title='Decrease Count' onPress={()=>setCount(count-1)}/>
       <Button  title='Reset Count' onPress={()=>setCount(0)}/>
        </View>

    </View>
  );
}

const styles=StyleSheet.create({
  title:{
    fontSize:25,
    color:'red',
    marginBottom:15,
    fontWeight:'bold'
  },
  buttonContainer:{
    flexDirection:'row',
    gap:10
  }
}) */}

 {/* / const UserData=(props: { item: any; })=>{ */}
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