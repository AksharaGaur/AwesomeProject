import React,{useEffect} from 'react';
import {Text,View, FlatList, ActivityIndicator, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { RootState, AppDispatch } from '../redux/store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types'; // You must define this

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

//const ProductListSlide: React.FC<Props> = ({ route, navigation }) => { ... }

export type RootStackParamList = {
    ProductList: { category: string };
    ProductDetail: { product: any }; // Better if you define a proper `Product` type
  };
  
 


const ProductListSlide: React.FC<Props> = ({route,navigation}) => {
    const {category} : route.params;
    const dispatch = useDispatch<AppDispatch>();
    const {items, loading} = 
    useSelector((state: RootState)=>
    state.products);

    useEffect(()=>{
        dispatch(fetchProducts(category));
    }, [category]);

    if (loading) return <ActivityIndicator size="large" color="blue"/>
    return(
        
        <FlatList 
        data={items}
        keyExtractor={(item)=>
            item.id.toString()}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>
                navigation.navigate('ProductDetail', 
                    {product:item})} style={{margin:10}}>
                <Image source={{uri:item.image}} style={{height:150}}/>
                <Text>{item.title}</Text>

            </TouchableOpacity>
        )}/>
    
        
    )
}


export default ProductListSlide;