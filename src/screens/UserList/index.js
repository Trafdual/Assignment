import { Text, View,FlatList,StyleSheet,Button,Modal,Pressable,TextInput } from "react-native";
import { useState } from 'react';
// yêu cầu: định nghĩa một mảng có 3 phần tử
// mỗi phần tử gồm: id, name, age
// sử dụng flatlist để hiển thị
const UserList= (props) =>{
    const[switchState,setSwitchState]= useState(false);
const[list,setList] =useState([{id:1,name:'ABC',address: 'FPOLY',phone: '0967149183',trangthai:'1'}]);
const[nameinput,setnameinput]=useState('');
const[adddressinput,setadddinput]=useState('');
const[phoneinput,setphoneinput]=useState('');
const[trangthaiinput,settrangthaiinput]=useState('');
const[editingId,setEditingId]=useState(0);
const onClose = () =>{
  setSwitchState(false);
  setnameinput('');setEditingId(0);setadddinput('');setadddinput('');settrangthaiinput('');
}
const onsave=() =>{
  // kiểm tra editingid để biết là đang cập nhật
  if(editingId){
    const newList=list.map(item => {
if(item.id==editingId){
  item.name=nameinput;
  item.phone=phoneinput;
  item.trangthai=trangthaiinput;
  item.address=adddressinput;
}
return item;
    });
    setList(newList);
    return onClose() ;
  }
  // định nghĩa object mới được lưu vào
  const newItem={
    id: list.length==0 ? 1: list[list.length-1].id+1,
    name: nameinput,
    trangthai: trangthaiinput,
    phone: phoneinput,
    address: adddressinput
  }
  //thêm phần tử mới vào mảng list
  //dấu ... lấy toàn bộ phần tử của mảng mà không ảnh hưởng đến mảng đó
  const newList=[...list,newItem];
setList(newList);
  // đóng modal
  onClose;
setSwitchState(false);
}
const onDelete =(deleteId) => {
  const newList=list.filter(item => item.id !== deleteId);
  setList(newList);
};
const onEdit =(editId) => {
  //hiển thị modal và set giá trị cho input
  setSwitchState(true);
  //tìm ra phần tử đang cần sửa theo editId
const editItem=list.find(item => item.id ==editId);
setnameinput(editItem.name);
setadddinput(editItem.address);
setphoneinput(editItem.phone);
settrangthaiinput(editItem.trangthai);
//gán giá trị cho editingId để biết là đang sửa
setEditingId(editId);
};
    return (
        <View>
        <View>
            <Text>Trang danh sách</Text>
      { switchState? null:<Button title={'thêm mới'} onPress={() => setSwitchState(true)}/>}
     <Modal visible ={switchState} animationType="slide">
      <Text style={styles.text1}>Thêm mới</Text>
<TextInput value={nameinput} placeholder='Tên' onChangeText={(text) =>setnameinput(text)} />
<TextInput value={adddressinput} placeholder='Địa chỉ' onChangeText={(text) =>setadddinput(text)} />
<TextInput value={phoneinput} placeholder='Số điện thoại' onChangeText={(text) =>setphoneinput(text)} />
<TextInput value={trangthaiinput} placeholder='Trạng thái' onChangeText={(text) =>settrangthaiinput(text)} />
<Button title={'hủy'} onPress={() => onClose()}/> 
<Button title={'lưu'} onPress={() => onsave()}/>
</Modal>
        </View>
        <View >
           <FlatList 
          data={list}
          renderItem={({item}) => <View style={{marginTop:20}}>
           <Text>{item.id}</Text>
           <Text>{item.name}</Text>
           <Text>{item.address}</Text>
           <Text>{item.phone}</Text>
           <Text>{item.trangthai}</Text>

           <Pressable onPress={() => onEdit(item.id)}><Text>Sửa</Text></Pressable>
       <Pressable onPress={() => onDelete(item.id)}><Text>Xóa</Text></Pressable>
           </View>} 
          keyExtractor={(item) => item.id}
           />
           </View>
           </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize:20,
      color:'black'
    },
    text1:{
      fontSize:20,
      color:'red'
    }
  });
export default UserList;