import React,{useEffect} from 'react';
import {Text,View, ActivityIndicator, Button} from 'react-native';
// import { Camera, useCameraDevices, useCameraPermission , getCameraDevice } from 'react-native-vision-camera';
import Gallery from './src/galleryFlie';
import Counter from './src/ClassBaseCom/Counter';

const App = () => {
  

  
  return(
    // <Gallery/>
    
    <>
    <Counter />
    </>

  )
}


export default App;
































// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import CategorySlide from './src/slides/CategorySlide';
// import ProductListSlide from './src/slides/ProductListSlide';
// import ProductDetailSlide from './src/slides/ProductDetailSlide';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
// import { RootStackParamList } from './src/types';

// const Stack = createStackNavigator<RootStackParamList>();


// //const Stack = createStackNavigator();

// const App = () =>{
//   return(
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='CategorySlide'>
//           <Stack.Screen name="CategorySlide" component={CategorySlide} />
//           <Stack.Screen name="ProductListSlide" component={ProductListSlide} />
//           <Stack.Screen name="ProductDetailSlide" component={ProductDetailSlide}/>

//         </Stack.Navigator>
//       </NavigationContainer>

//     </Provider>
//   )
// }

// export default App;