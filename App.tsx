import { Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react'
import CompanyData from './components/companydata';
import MyButton from './components/myButton'
import { useState } from 'react';

function App() {
  
  return (
    <View>

      <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }}>React native mobile app development</Text>
      <CompanyData />
      <UserData />
      
      
    </View>

  );
}

const UserData = () =>{
  const [name, setName] = useState('Akshara')
  let data = "Hello";

  function testName(){
    setName("Akshita")
  }

  return (
    <View>
    <Text style={{fontSize:25, fontWeight:'bold', margin:10}}>User Data</Text>
    <Text style={{fontSize:20}}>Name: Akshara</Text>
    <Text style={{fontSize:20}}>Age : 22</Text>
    <Text style={{fontSize:20}}>Email: akgaur@deqode.com</Text>
    <Text style={{fontSize:20}}>{data}</Text>
    <Text style={{fontSize: 20}}>{name}</Text>
    <TouchableOpacity onPress={testName}>
      <Text>Press Here</Text>
    </TouchableOpacity>
    
    </View>
  
  )
}

export default App;