import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList} from '../../App';

type ItemDetailRouteProp = RouteProp<RootStackParamList,'Details'>;

const ItemDetail = ({route}:{route:ItemDetailRouteProp}) =>{
    const {id}= route.params;
    const [item, setItem] = useState<any>(null)


    useEffect(()=>{
        const fetchItemDetail = async()=>{
            try{
                const response=await axios.get(`https://fakestoreapi.com/products/${id}`, {
                    headers:{
                        Authorization: 'Bearer Product_Detail',
                    },
                });
                setItem(response.data);
            }catch(error){
                console.error(error)
            }
        };

        fetchItemDetail();
    },[id]);

    return(
        <View style={{flex:1}}>
            { item ?
            (
                <>
                <Text>Title:{item.title}</Text>
                <Text>Rating:{item.Rating}</Text>
                </>
            ):(<Text>Loading....</Text>

            )}
        </View>
    )

}

export default ItemDetail;