import React, {useState, useEffect} from 'react';
import { View, Text, FlatList , TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type HomeDetailNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface products {
    id:string;
    title:string;
}

const HomeDetail=({navigation}:{navigation:HomeDetailNavigationProp})=>{
    const [data, setData] = useState<products[]>([]);

    useEffect(()=>{
      
        const fetchData = async()=>{
            
            try{
                const response = await 
                axios.get('https://fakestoreapi.com/products/1',{
                    headers: {
                        Authorization:'Bearer Product_Detail',
                    },
                });
                console.log('hola here 1',JSON.stringify(response))
                 //setData(response.data.products);
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
        <Text>HOLA here</Text>
        // <View style={{flex:1}}>
        //     <FlatList 
        //     data={data}
        //     keyExtractor={(item)=> item.id}
        //     renderItem={({item})=>(
        //         <TouchableOpacity onPress={()=> navigation.navigate('Details', {id:item.id})}>
        //             <Text>{item.title}</Text>
        //         </TouchableOpacity>

        //     )}/>
        // </View>
    )

}


export default HomeDetail;
