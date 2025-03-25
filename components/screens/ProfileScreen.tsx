import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { RouteProp} from '@react-navigation/native';

type RootStackParamList={
    Profile:{name:string, image:string, email:string}
}

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props={route:ProfileScreenRouteProp}

const ProfileScreen:React.FC<Props>=({route})=>{
    const {name,image,email}=route.params;
    return(
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{flex:1, justifyContent:'center', alignItems:'center', padding:10},
    name:{fontSize:25, fontWeight:'bold'},
    email:{fontSize:25, color:'grey'},
    image:{width:100, height:100, borderRadius:50, marginBottom:20}
})


export default ProfileScreen;