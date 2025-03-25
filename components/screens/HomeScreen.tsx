import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
    Home:undefined,
    Profile : {name:string; email:string; image:string};
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList,'Home'>;

type props = {
    navigation : HomeScreenNavigationProp;
};

const users = [
    {name:'Mariano Viola', image:'https://images.unsplash.com/photo-1599842057874-37393e9342df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFrZSUyMHdvbWFufGVufDB8fDB8fHww', email:'Mviola@example.com'},
    {name : 'Maria Dsouza', image:'https://images.unsplash.com/photo-1610392533001-bccdab7d9234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFrZSUyMHdvbWFufGVufDB8fDB8fHww', email:'Mdsouza@example.com'}
]

const HomeScreen: React.FC<props>=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Users</Text>
            <FlatList data={users}
            keyExtractor={(item)=>item.email}
            renderItem={({item})=>(<TouchableOpacity onPress={()=>navigation.navigate('Profile',item)}> 
            <View style={styles.userContainer}>
                <Image source={{uri:item.image}} style={styles.image}/>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            </TouchableOpacity>)}/>

        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    title:{
        fontSize:25, marginBottom:10, textAlign:'center'
    },
    userContainer:{
         flexDirection:'row', alignItems:'center', marginBottom:10
    },
    image:{
        width:50, height:50, borderRadius:20, marginRight:10
    },
    name:{
        fontSize:15
    }

})


export default HomeScreen;