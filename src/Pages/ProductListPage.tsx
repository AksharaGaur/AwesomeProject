import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { products } from '../data/products';


// // Correctly define Props with StoreStackParamList
// type ProductListNavigationProp = StackNavigationProp<StoreStackParamList, 'ProductList'>;
// type ProductListRouteProp = RouteProp<StoreStackParamList, 'ProductList'>;

type Props = {
    navigation: StackNavigationProp<any, 'ProductList'>;
    route: RouteProp<{params: {category:string}},'params'>;
};

//const productList = products[category as keyof typeof products] || [];

const ProductListPage: React.FC<Props> = ({ navigation, route }) => {
    const { category } = route.params;
    const productList = products[category as keyof typeof products] || [];

    return (
        <View style={styles.container}>
            <FlatList 
                data={productList} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.item} 
                        onPress={() => navigation.navigate('ProductDetail', { product: item })}
                    >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor:'lightyellow' },
    item: { padding: 10, borderRadius: 10, marginVertical: 8 , backgroundColor:'pink'},
    text: { fontSize: 25, textAlign: 'center' },
    image: { height: 'auto', width: 'auto', alignSelf: 'center' }
});

export default ProductListPage;
