import { Text,View } from 'react-native';

const CompanyData=()=>{
    return(
        <View>
            <Text style={{fontSize:25, fontWeight:'bold', margin:10}}>Company Data</Text>
            <Text style={{fontSize:20}}>ComName: Deqode</Text>
            <Text style={{fontSize:20}}>comLocation: Indore</Text>
            <Text style={{fontSize:20}}>ComEmail: xyz@deqode.com</Text>

        </View>

    )
}
export default CompanyData;