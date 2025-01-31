import { Pressable, View ,StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({onPress}){
    return(
        <View style={styles.CircleButtonContainer}>
            <Pressable onPress={onPress} style={styles.circleButton}>
                <MaterialIcons name="add" size={48} color='#25292e' />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    CircleButtonContainer:{
        widht:84,
        height:84,
        marginHorizontal:60,
        borderWidth:4,
        borderColor:'#ffd33d',
        borderRadius:42,
        padding:3,
    },
    circleButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:42,
        backgroundColor:'#fff',

    },
});