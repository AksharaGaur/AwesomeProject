import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { categories } from '../data/products';

type Props = {
    navigation : StackNavigationProp<any, 'Category'>;
}

const CategoryPage : React.FC<Props> = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <FlatList data={categories} 
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('productList',
                     {category: item.name})}>
                <Text style={styles.text}>{item.name}</Text>
                     </TouchableOpacity>
            )}/>

        </View>
    )
}

const styles= StyleSheet.create({
    container:{flex:1, padding:20},
    item:{padding:10, backgroundColor:'#ccc',borderRadius:10, marginVertical:8},
    text:{fontSize:20, textAlign:'center'}
})

export default CategoryPage;