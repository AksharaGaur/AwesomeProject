import React, {useState, useEffect} from 'react';
import { View, Text, FlatList , TouchableOpacity, Alert, StyleSheet} from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type HomeDetailNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface product {
    id:string;
    title:string;
}

const HomeDetail=({navigation}:{navigation:HomeDetailNavigationProp})=>{
    const [data, setData] = useState<product[]>([]);

    useEffect(()=>{
      
        const fetchData = async()=>{
            
            try{
                const response = await 
                axios.get('https://fakestoreapi.com/products/',{
                    headers: {
                        Authorization:'Bearer Product_Detail',
                    },
                });
             
                 setData(response.data);
                // Alert.alert("response",response)

            }catch(error){
                console.error(error);
            };
        };

        fetchData();
    },[]);
    // console.log('hola')
    // console.log('hola')
    return(
       
        <View style={{flex:1}}>
            <FlatList 
            data={data}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=> navigation.navigate('Details', {id:item.id})}>
                
                
                    <Text style={styles.input}>{item.title}</Text>
                    

                </TouchableOpacity>

            )}/>
        </View>
    )

}

const styles = StyleSheet.create({
    
    input: {
        fontSize:20,
        width:400,
        margin:10,
        fontWeight:'bold',
        color:'red'
        
    },

    

})


export default HomeDetail;


