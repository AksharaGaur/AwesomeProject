
import { Button } from 'react-native';

const MyButton = () => {
    function alert(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return <Button title='Click Me' onPress={() => alert('Button Pressed')}/>
}

export default MyButton;
