import React,{useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';


const UserData = () =>{
  const [name, setName] = useState('Akshara')
  let data = "Hello";

  function testName(){
    setName("Akshita")
  }
  return (
      <View>
      <Text style={{fontSize:25, fontWeight:'bold', margin:10, backgroundColor:'blue', color:'white'}}>User Data</Text>
      <Text style={styles.textBox}>Name: Akshara</Text>
      <Text style={styles.textBox}>Age : 22</Text>
      <Text style={styles.textBox}>Email: akgaur@deqode.com</Text>
      <Text style={styles.textBox}>{data}</Text>
      <Text style={styles.textBox}>{name}</Text>
      <TouchableOpacity onPress={testName}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      
      </View>
    
    )
}

const styles = StyleSheet.create({
    textBox:{
        fontSize:20,
        backgroundColor:'red',
        color:'white',
        margin:10,
        padding:10,
        borderRadius:10

    }
})

export default UserData;