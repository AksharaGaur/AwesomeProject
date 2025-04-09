import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any,any>;

const CategorySlide: React.FC<Props> =({navigation})=>{
    return(
        <View>
            <Text style={{fontSize:30, fontWeight:'bold', margin:15}}>Select a category:</Text>
            <Button title="Electronics" onPress={()=>
                navigation.navigate('ProductList',
                    {category:'electronics'})}/>
            <Button title="Jewelery" onPress={()=>
                navigation.navigate('ProductList',
                    {category:'jewelery'})}/>

        </View>
    )
}

export default CategorySlide;