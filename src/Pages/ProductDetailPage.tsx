import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

// Define navigation stack params
type StoreStackParamList = {
    ProductDetail: { product: { name: string; price: string; image: string; description: string } };
};

type Props = StackScreenProps<StoreStackParamList, 'ProductDetail'>;

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
    container: { flex: 1, padding: 10, alignItems: 'center' },
    image: { width: 200, height: 200 },
    title: { fontSize: 25, fontWeight: 'bold', marginVertical: 10 },
    price: { fontSize: 22, color: 'green', marginBottom: 10 },
    description: { fontSize: 18, textAlign: 'center' }, // Fixed typo from "discription" to "description"
});

export default ProductDetailPage;
