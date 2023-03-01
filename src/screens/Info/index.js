import { Text, View,Image, Button,StyleSheet,Pressable} from "react-native";
const Info= (props) =>{
    const navigation=props.navigation;
    const chuyenMH=(ten_mh, data)=>{
        navigation.navigate(ten_mh, data);
    }
    return(
        <View  >
            <Text  > TRANG THÔNG TIN</Text>
            <Text >Họ và tên: Nguyễn Hoàng Trà</Text>
            <Text >MSV: PH26979</Text>
           
            <Pressable  onPress={() => chuyenMH('UserList',{id: 234})}>
                <Text >Vào Trang Danh Sách Cửa Hàng</Text>
            </Pressable>
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
export default Info;