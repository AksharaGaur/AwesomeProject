import React, { useEffect } from 'react';
import {Text,View, FlatList, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { fetchProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch} from '../redux/store';
import { RootStackParamList } from '../types';





type Props = NativeStackScreenProps <RootStackParamList, 'ProductListSlide'>;


const ProductListSlide: React.FC<Props> = ({route, navigation})=>{
    const dispatch = useDispatch<AppDispatch>();
    const { category } = route.params;

    const { items, loading } = useSelector((state: RootState) => state.products);

    useEffect (()=>{
        dispatch(fetchProducts(category));
    }, [category]);
    if (loading) return <ActivityIndicator size="large" color="blue" />;
    return(

        <FlatList 
        data={items}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>
                navigation.navigate('ProductDetailSlide', 
                    {product:item})}>
                <Image source={{uri:item.image}} style={{height:100, width:100}}/>
            </TouchableOpacity>
        )}
        keyExtractor={(item)=> item.id.toString()}
        />
    )
}

export default ProductListSlide;