import React from "react";
import { View, StyleSheet } from "react-native";
import ImageViewer from "../component/ImageViewer";
import Button from "../component/Button";
//import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker'
//import { ColorSpace } from "react-native-reanimated";
import { useState } from 'react'
import IconButton from "../component/IconButton";
import CircleButton from "../component/CircleButton";
import EmojiPicker from "../component/EmojiPicker";
import EmojiList from "../component/EmojiList";
import EmojiSticker from "../component/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";




const PlaceholderImage = require("../assets/images/background-image.png");

export default function Index({ navigation }) {


    const [selectedImage, setSelectedImage] = useState();
    const [showAppOption, setShowAppOption] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState();


    const PickImgAsync = async () => {
        //For Image Picking in Our Media File
        let result = await ImagePicker.launchImageLibraryAsync({ //result Have a selected Image
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri); //Selected Image 
            setShowAppOption(true);
        } else {
            alert("You Did not select any image.")
        }
    };

    const onRest = () => {
        setShowAppOption(false);
    };

    const onAddSticker = () => {
        setIsModalVisible(true);
    };
    const onModalIsClose = () => {
        setIsModalVisible(false);
    };

    const onSaveImageAsync = async () => {

    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.ImageContainer}>
                <ImageViewer Imagesrc={PlaceholderImage} selectedImage={selectedImage} />
                {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
            </View>
            {showAppOption ? (
                <View style={styles.optionContainer}>
                    <View style={styles.bottomRow}>
                        <IconButton icon='refresh' label='Reset' onPress={onRest} />
                        <CircleButton onPress={onAddSticker} />
                        <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                    <Button theme="Primary" label={'Choose a Photo'} onPress={PickImgAsync} />
                    <Button label={'use This Photo'} onPress={() => setShowAppOption(true)} />
                </View>
                //<StatusBar style="auto" />
            )}

            <EmojiPicker isVisible={isModalVisible} onClose={onModalIsClose}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalIsClose} />
            </EmojiPicker>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 2,
    },
    ImageContainer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1 / 3,
    },
    optionContainer: {
        position: 'absolute',
        bottom: 80,

    },
    bottomRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },

});