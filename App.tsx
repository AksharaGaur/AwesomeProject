import { Text, View} from 'react-native';
import React from 'react';


const App = () => {
  return (
    <View>
    
      <Text style={{fontSize:30}}>React native mobile app development</Text>
      <UserData/>
    </View>

  )
}

const UserData = () =>{
  return (
    <View>
      <Text style={{fontSize:25}}>User Data</Text>
    <Text style={{fontSize:20}}>Name: Akshara</Text>
    <Text style={{fontSize:20}}>Age : 22</Text>
    <Text style={{fontSize:20}}>Email: akgaur@deqode.com</Text>
    </View>
  
  )
}

export default App;