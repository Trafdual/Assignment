import { Text, View,Image, Button} from "react-native";
const Info= (props) =>{
    return(
        <View>
            <Text> trang thông tin</Text>
            <Text>Họ và tên: Nguyễn Hoàng Trà</Text>
            <Text>MSV: PH26979</Text>
            <Image style={{width:200,height:200}}  source={require('../../../assets/tra.jpg')}/>
            </View>
    );
};
export default Info;