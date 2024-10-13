import { View, Text, Modal ,Pressable ,StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({isVisible , children , onClose}) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            <View style={styles.titleContianer}>
                <Text style={styles.title}>Choose a sticker</Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name='close' size={22} color='#fff' />
                </Pressable>
            </View>
         {children}
        </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
    modalContent:{
        height:"34%",
        width:"100%",
        backgroundColor:'#25292e',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        position:"absolute",
        bottom:0,
    },
    titleContianer:{
        height:'16%',
        backgroundColor:'#464C55',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        color:'#fff',
        fontSize:16,
    },
});