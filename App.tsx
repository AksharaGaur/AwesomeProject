import { Text, View, Button} from 'react-native';
import React from 'react';
import CompanyData from './components/companydata';


const App = () => {
  
  return (
    <View>

      <Text style={{fontSize:30, fontWeight:'bold', margin:10}}>React native mobile app development</Text>
      <CompanyData />
      <UserData/>
      
    </View>

  )
}
const fruit = () =>{
  console.log("function called")
}

const UserData = () =>{
  return (
    <View>
    <Text style={{fontSize:25, fontWeight:'bold', margin:10}}>User Data</Text>
    <Text style={{fontSize:20}}>Name: Akshara</Text>
    <Text style={{fontSize:20}}>Age : 22</Text>
    <Text style={{fontSize:20}}>Email: akgaur@deqode.com</Text>
    <Button title='on Press' color={'green'} onPress={fruit}/>
    </View>
  
  )
}

export default App;