import {View, TextInput, Button,StyleSheet,Text,Alert} from 'react-native';
import {useState, useEffect} from 'react';
import { API_USER } from '../../helpers/api';

const Form = (props) => {
    const nav = props.navigation;
    const editData = props.route.params?.editData;
    const [name, setName] = useState('');
    const[adddressinput,setadddinput]=useState('');
    const[phoneinput,setphoneinput]=useState('');
    const[trangthaiinput,settrangthaiinput]=useState('');
    useEffect(() => {
        if (editData){
            setName(editData.name);
            setadddinput(editData.address);
            setphoneinput(editData.phone);
            settrangthaiinput(editData.trangthai);
        }
    }, [editData?.id]);
    const funcValidate = () => {
        if(
            name.length == 0 ||
            adddressinput.length == 0 ||
            phoneinput.length == 0 ||
            trangthaiinput.length == 0 
           
        ){
            Alert.alert(
                'Bản ghi không hợp lệ',
                'Vui lòng điền đúng thông tin và không được để trống',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('Validation failed'),
                        style: 'cancel'
                    }
                ]
            );
            return false;
        }
        return true;
    };
    const onSave = () => {
        if(funcValidate()){
  const newObj = {
    name: name,
    trangthai: trangthaiinput,
    phone: phoneinput,
    address: adddressinput
}; 
fetch(
  
    !editData ? API_USER : API_USER + '/' + editData.id,
    {
    method: !editData ? 'POST' : 'PUT',
  
    body: JSON.stringify(newObj),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}).then((res) => nav.goBack());
        }
      
    };

    return (
        <View>
            <TextInput  value={name} placeholder='Họ Tên'
                onChangeText={(text) => setName(text)}
            />
            <TextInput  value={adddressinput} placeholder='Địa chỉ'  onChangeText={(text) =>setadddinput(text)} />
<TextInput  value={phoneinput} placeholder='Số điện thoại'  onChangeText={(text) =>setphoneinput(text)} />
<TextInput  value={trangthaiinput} placeholder='trạng thái' onChangeText={(text) =>settrangthaiinput(text)} />
            <Button 
                title='Lưu'
                onPress={() => onSave()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },button1:{
        marginTop:10
    }
  });
export default Form;
