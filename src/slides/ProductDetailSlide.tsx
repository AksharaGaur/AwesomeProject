import React from 'react';
import {Text,View,Image} from 'react-native';
import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps <RootStackParamList,'ProductDetailSlide'>;

const ProductDetailSlide:React.FC<Props>=({route})=>{
    const { product } = route.params;
    return(
        <View style={{flex:1, alignItems:'center', backgroundColor:'lightyellow'}}>
            <Text style={{fontSize:20, fontWeight:'bold', margin:20, color:'purple'}}>Title: {product.title}</Text>
            <Image source={{uri:product.image}} style={{height:200, width:200, alignItems:'center'}} />
            <Text style={{fontWeight:'bold', marginTop:10, fontSize:20, color:'purple'}}>Price: {product.price}</Text>
            <Text style={{marginTop:10, fontSize:15 }}>Description: {product.description}</Text>
            
        </View>
    )
}

export default ProductDetailSlide;