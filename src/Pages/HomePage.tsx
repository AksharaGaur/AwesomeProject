import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
    navigation: StackNavigationProp<any,'Home'>;
}

const HomePage : React.FC<Props> = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the store</Text>
            <Button title='Brows Category' onPress={()=>navigation.navigate('Category')}/>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{flex:1, justifyContent:'flex-start', alignItems:'center',  backgroundColor:'lightyellow'},
    title:{fontSize:40, fontWeight:'bold', marginTop:30, marginBottom:30, color:'red'}

})

export default HomePage;