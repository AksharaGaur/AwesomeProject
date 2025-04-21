import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any,any>;

const CategorySlide: React.FC<Props> =({navigation})=>{
    return(
        <View style={{flex:1, backgroundColor:'lightyellow'}}>
            <Text style={{fontSize:30, fontWeight:'bold', margin:15, color:'red'}}>Select a category:</Text>
            <View style={{margin:15}}>
            <Button title="Electronics" onPress={()=>
                navigation.navigate('ProductListSlide',
                    {category:'electronics'})}/>
           </View>
           <View style={{margin:15}}>
            <Button title="Jewelery" onPress={()=>
                navigation.navigate('ProductListSlide',
                    {category:'jewelery'})}/>
            </View>

        </View>
    )
}

export default CategorySlide;