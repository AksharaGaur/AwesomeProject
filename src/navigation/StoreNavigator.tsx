// StoreNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Pages/HomePage';
import CategoryPage from '../Pages/CategoryPage';
import ProductListPage from '../Pages/ProductListPage';
import ProductDetailPage from '../Pages/ProductDetailPage';

// ✅ Explicitly export StoreStackParamList
export type StoreStackParamList = {
  Home: undefined;
  Category: undefined;
  ProductList: { category: string }; // Ensure ProductList expects category
  ProductDetail: { product: any };   // Ensure ProductDetail expects product
};

const Stack = createStackNavigator<StoreStackParamList>();

const StoreNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Category" component={CategoryPage} />
        <Stack.Screen name="ProductList" component={ProductListPage} />
        <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StoreNavigator;
