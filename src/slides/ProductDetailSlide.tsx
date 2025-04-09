import React from 'react';
import {Text,View,Image} from 'react-native';
import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps <RootStackParamList,'ProductDetailSlide'>;

const ProductDetailSlide:React.FC<Props>=({route})=>{
    const { product } = route.params;
    return(
        <View>
            <Image source={{uri:product.image}} style={{height:200, width:200}} />
            <Text style={{fontSize:18, fontWeight:'bold', marginTop:10}}>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
        </View>
    )
}

export default ProductDetailSlide;