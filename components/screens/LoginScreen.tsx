import React , {useState} from 'react';
import {View, Text, Alert, TextInput,Button, StyleSheet} from 'react-native';
import { StackNavigationProp} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList={
    Login: undefined;
    Home: undefined;
}

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login' >

type Props = {navigation:LoginScreenNavigationProp;};

const LoginScreen: React.FC<Props>=({navigation})=> {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleLogin =()=>{
        if(email==='test@example.com' && password === 'password123')
            {navigation.navigate('Home')} else{
                Alert.alert('Invalid Credentials')
            }

    }
     return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
            style={styles.input} 
            placeholder='Email' 
            keyboardType='email-address'
            onChangeText={setEmail}/>

            <TextInput
            style={styles.input} 
            placeholder='Password'
            secureTextEntry
            onChangeText={setPassword}/>

            <Button title='Login' onPress={handleLogin}/>

            <Text style={{marginTop:20}}>Email: test@example.com</Text>
            <Text>Password: password123</Text>
        </View>
     )

}

const styles = StyleSheet.create({
    container:{
        flex:1, justifyContent:'center', padding:10
    },
    title:{
        fontSize:25, marginBottom:10, textAlign:'center', fontWeight:'bold'
    },
    input:{
        borderWidth:1, marginBottom:10, padding:5,borderRadius:5
    }
})




export default LoginScreen;