import { Text, View, ScrollView ,Button, TouchableOpacity, StyleSheet,TextInput, FlatList, SectionList} from 'react-native';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeDetail from './src/details/HomeDetail';
// import ItemDetail from './src/details/ItemDetail';

//import CompanyData from './components/companydata';
// import MyButton from './components/myButton'

//import UserData from './components/userdata';
// import LoginData from './components/LoginData';
// import AppNavigator from './components/navigation/AppNavigator';
// import SearchBox from './components/screens/SearchBox';
// import StoreNavigator from './src/navigation/StoreNavigator';



// const App=()=>{
//   getAPIData
//   const[data,setData]=useState();
//   const url= "http://10.0.2.2:3000/users"
//   let result = await fetch(url)
// }




export type RootStackParamList = {
  Home: undefined;
  Details: {id:string};
};

const Stack = 
createStackNavigator<RootStackParamList>();


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home"> 
//         {/* <Stack.Screen name="Home" component={HomeDetail} />
//         <Stack.Screen name="Details" component={ItemDetail} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };










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



