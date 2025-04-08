import React from 'react';
import {Text,View, Button} from 'react-native';



const CategorySlide = ({navigation}) => {
    return(
        <View>
            <Text>Select Category</Text>
            <Button title='Electronics' 
            onPress={()=> navigation.navigate ('ProductList',
                {category: 'electronics'})} />
            <Button title='Jewelery'
            onPress={()=> navigation.navigate ('ProductList',
                {category: 'jewelery'})}/>

        </View>

    )
}


export default CategorySlide;