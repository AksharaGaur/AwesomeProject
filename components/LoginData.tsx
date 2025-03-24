import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

const LoginData = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[display,setDisplay]=useState(false);

    const resetFormData=()=>{ 
        setName("");
        setPassword("");
        setEmail("");
        setDisplay(false);
        
    }

    return (
        <View style={{flex:1}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 , color:'red'}}>Login Page</Text>
            <TextInput style={styles.TextInput} placeholder='Enter your name'
                value={name} onChangeText={(text) => setName(text)} />

            <TextInput style={styles.TextInput} placeholder='Enter your password'
                secureTextEntry={true}
                value={password} onChangeText={(text) => setPassword(text)} />

            <TextInput style={styles.TextInput} placeholder='Enter your email'
                value={email} onChangeText={(text) => setEmail(text)} />

            <View style={{ marginBottom: 10 }}>
                <Button color={'green'} title='Print Detail' onPress={() => setDisplay(true)} />
            </View>

            <Button title='Clear Data' onPress={resetFormData} />
            <View>
                {
                    display ?
                        <View>
                            <Text style={{ fontSize: 20 }}>Your name is : {name}</Text>
                            <Text style={{ fontSize: 20 }}>Your password is : {password}</Text>
                            <Text style={{ fontSize:20}}>Your email is : {email}</Text>
                        </View>
                        : null

                }
            </View>
        </View>



    )
}

const styles=StyleSheet.create({
    TextInput:{
        fontSize:20,
        color:'black',
        margin:10,
        padding:10,
        borderRadius:10,
        backgroundColor:'lightblue'

    }
})

export default LoginData;