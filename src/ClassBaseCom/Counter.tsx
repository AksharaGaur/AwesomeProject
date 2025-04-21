import React,{Component} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

interface Props {}

interface State {
    count:number
}

class Counter extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        console.log('constructor run')
        this.state ={
            count: 0
        }
    }

    componentDidMount(): void {
        console.log('constructor: Mounting phase')
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.log('shouldComponentUpdate')
        return true
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('componentDidUpdate')
    }

    componentWillUnmount(): void {
        console.log('Component: Unmount phase')
    }
 


    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }


    render()
    {
        console.log('Rendering trigger')
        return(
            <View style={Styles.container}>
                <Text style={Styles.text}>Count: {this.state.count} </Text>
                <View style={Styles.buttonConatiner}>
                <Button title='increment' onPress={this.increment}/> 
                <Button title='decrement' onPress={this.decrement}/>
                </View>
            </View>
        )
    }

}

const Styles = StyleSheet.create ({
    container: {
        flex:1,
        textAlign:'center',
        justifyContent:'center',
        margin: 70,
        padding: 30
        
    },
    text: {
        fontSize:35,
        fontWeight:'bold',
        margin:20
    },
    buttonConatiner: {
        gap:20,
        flexDirection:'row'
    }
})


export default Counter;