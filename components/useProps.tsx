import React, {useState} from 'react';
import {Text,View,Button} from 'react-native';

const app=()=>{
const[name, setName] = useState('Akshara')
return (
     <View>
        <Text style={{fontSize : 30}}>Props in React Native</Text>
        <Button title='Update props' onPress={()=>setName("Akshita") }/>
        <User name={name} email="akgaur@deqode.com" age={22}/>
     </View>
);
};

interface UserProps {
    name: string;
    email: string;
    age?: number; // Optional prop
  }
    
const User : React.FC<UserProps> =(props) => {
    return (
        <View style={{backgroundColor: 'blue', padding: 5}}>
            <Text style={{fontSize:20}}>Name: {props.name}</Text>
            <Text style={{fontSize:20}}>age: {props.age}</Text>
        </View>
    )
}

export default app;

