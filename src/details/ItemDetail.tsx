import React,{useState,useEffect} from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
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
                <View style={styles.container1}>
                <Text style={styles.texthead} >Title:</Text>
                <Text style={styles.textbody}>{item.title}</Text>
                </View>

                <View style={styles.container1}>
                <Text style={styles.texthead}>Price:</Text>
                <Text style={styles.textbody}>{item.price}</Text>
                </View>

                <View style={styles.container1}>
                <Text style={styles.texthead}>Description:</Text>
                <Text style={styles.textbody}>{item.description}</Text>
                </View>

                <View style={styles.container1}>
                <Text style={styles.texthead}>Category:</Text>
                <Text style={styles.textbody}>{item.category}</Text>
                </View>

                
                <Image 
                        style={styles.image} 
  source={{ uri: item.image }} 
  resizeMode="cover" 
/>
<View style={styles.container1}>
                <Text style={styles.texthead}>Rating:</Text>
                <Text style={styles.textbody}>{item.Rating}</Text>
                </View>


                </>
            ):(<Text>Loading....</Text>

            )}
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        width: 300,  // Set your preferred width
        height: 300, // Set your preferred height
        borderRadius: 10,
        margin:10,
      },
    texthead:{
        margin: 5,
        fontWeight:'bold',
        fontSize:25,
        color:'orange'

    },
    container1:{
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    textbody:{
        margin: 10,
        fontSize:17,
        width:250

    },
    
    
})

export default ItemDetail;