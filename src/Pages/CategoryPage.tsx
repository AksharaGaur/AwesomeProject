import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { categories } from '../data/products';

type Props = {
    navigation : StackNavigationProp<any, 'Category'>;
}
//onPress={() => navigation.navigate('ProductList', { category: 'Clothing' })}


const CategoryPage : React.FC<Props> = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <FlatList data={categories} 
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('ProductList',
                     {category: item.name})}>
                <Text style={styles.text}>{item.name}</Text>
                     </TouchableOpacity>
            )}/>

        </View>
    )
}

const styles= StyleSheet.create({
    container:{flex:1, padding:20, backgroundColor:'lightyellow'},
    item:{padding:10, backgroundColor:'pink',borderRadius:10, marginVertical:8},
    text:{fontSize:25, textAlign:'center', fontWeight:'bold'}
})

export default CategoryPage;