import react from "react";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function ImageViewer({Imagesrc , selectedImage}){
    
    const ImageSource= selectedImage? {uri:selectedImage}:Imagesrc;

    return (<Image source={ImageSource} style={styles.image}/>);
}

const styles = StyleSheet.create({
    image:{
        width:320,
        height:440,
        borderRadius:18,
    },
});