import { Text, View, Button} from 'react-native';
import React from 'react'
import CompanyData from './components/companydata';
import MyButton from './components/myButton'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Akshara')
  let data = "Hello";

  function testName(){
    setName("Akshita")
    data="Good Evening"
  }

  return (
    <View>

      <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }}>React native mobile app development</Text>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Button title='Click Me' onPress={testName}/>
      <CompanyData />
      <UserData />
      
      
    </View>

  );
}

const UserData = () =>{
  return (
    <View>
    <Text style={{fontSize:25, fontWeight:'bold', margin:10}}>User Data</Text>
    <Text style={{fontSize:20}}>Name: Akshara</Text>
    <Text style={{fontSize:20}}>Age : 22</Text>
    <Text style={{fontSize:20}}>Email: akgaur@deqode.com</Text>
    
    </View>
  
  )
}

export default App;