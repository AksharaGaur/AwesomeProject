import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// // Define navigation stack params
type StoreStackParamList = {
    ProductDetail: { product: { name: string; price: string; image: string; description: string } };
};

type Props = {
    //route: RouteProp<{params: {product:{name: string, price:string, image:string, description:string}}},'params'>;

        navigation: StackNavigationProp<any, 'ProductDetail'>;
        route: RouteProp<StoreStackParamList, 'ProductDetail'>;
    
      
}

const ProductDetailPage: React.FC<Props> = ({ route }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, alignItems: 'center' , backgroundColor:'lightyellow'},
    image: { width: 300, height: 300 },
    title: { fontSize: 25, fontWeight: 'bold', marginVertical: 10 },
    price: { fontSize: 22, color: 'green', marginBottom: 10 },
    description: { fontSize: 18, textAlign: 'center' }, // Fixed typo from "discription" to "description"
});

export default ProductDetailPage;
