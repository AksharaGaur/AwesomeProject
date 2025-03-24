import { Text, View, Button, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import React from 'react'
import CompanyData from './components/companydata';
import MyButton from './components/myButton'
import { useState } from 'react';
import UserData from './components/userdata';
import LoginData from './components/logindata';

function App() {
  
  // const[name,setName]= useState("");
  // const[password, setPassword]= useState("");
  // const[email, setEmail]=useState("");
  // const[display,setDisplay]=useState(false);

  // const resetFormData = ()=>{
  //   setDisplay(false);
  //   setName("");
  //   setPassword("");
  //   setEmail("");
  

  return (
    <LoginData/>
//     <View>

//       <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }}>React native mobile app development</Text>
//       <Text style={{fontSize:20, fontWeight: 'bold', margin: 10}}>Handle your text</Text>
//       <TextInput style={styles.textInput}
//       placeholder='Enter your name'
//       value={name}
//       onChangeText={(text)=>setName(text)}/>

//       <TextInput style={styles.textInput}
//       placeholder='password'
//       secureTextEntry={true}
//       value={password}
//       onChangeText={(text)=>setPassword(text)}/>

//       <TextInput style={styles.textInput}
//       placeholder='email'
//       value={email}
//       onChangeText={(text)=>setEmail(text)}/>

//     <View style={{marginBottom:10}}>
//       <Button color={"green"} title='Print Detail' onPress={()=>setDisplay(true)}/>
//     </View>
     
//       <Button title='Clear input' onPress={resetFormData}/>

//         <View>
//           {
//             display ?
//             <View>
//               <Text style={{fontSize:20}}>User name is: {name}</Text>
//               <Text style={{fontSize:20}}>User Password is: {password}</Text>
//               <Text style={{fontSize:20}}>User Email is: {email}</Text>
            
//             </View>
//             :null
//           }
//         </View>
//   </View>

//   );
// }

// const styles = StyleSheet.create({
//   textInput:{
//       fontSize:20,
//       backgroundColor:'red',
//       color:'white',
//       margin:10,
//       padding:10,
//       borderRadius:10

//   }
)  

}

export default App;