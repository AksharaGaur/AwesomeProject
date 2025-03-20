import { Text, View, Button } from 'react-native';
import React from 'react';

const name="Akshara";
var email="akgaur@deqode.com"
let age = 22;
const App = () => {
  return (
    <View>
    
      <Text style={{fontSize:30}}>React native mobile app development</Text>
      <Button title="Press Here"/>
      <Text style={{fontSize:30}}>{name}</Text>
      <Text style={{fontSize:30}}>{email}</Text>
      <Text style={{fontSize:30}}>{age}</Text>
      <Text style={{fontSize:30}}>{age>18?"Adult":"Not adult"}</Text>
    </View>
  )
}

export default App;