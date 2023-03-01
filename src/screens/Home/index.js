import { View,Pressable,Text,StyleSheet, Image} from "react-native";

const Home=(props) =>{
    // trong rpops sẽ có navigation được nhận từ stack.screen ở App.js
    const navigation=props.navigation;
    const chuyenMH=(ten_mh, data)=>{
        navigation.navigate(ten_mh, data);
    }
    return(
        <View >
           
            <Pressable  onPress={() => chuyenMH('Info',{id: 123})}>
                <Text>Vào Trang Thông Tin</Text>
            </Pressable>
            <Pressable  onPress={() => chuyenMH('UserList',{id: 234})}>
                <Text>Vào Trang Danh Sách Cửa Hàng</Text>
            </Pressable>
        </View>
    )
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
export default Home;