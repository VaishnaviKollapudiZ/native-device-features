import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, Image, Alert } from 'react-native'
import Colors from '../../constants/Colors'
import * as ImagePicker from "expo-image-picker"
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'



function ImgPicker(props:any) {


    const [pickedImage, setPickedImage] = useState("")
  
    
    const takeImageHandler = async()=>{
        const image:ImagePicker.ImagePickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing:true
        });
        console.log(image)
        const { uri } = image as ImageInfo;
        setPickedImage(uri);
        props.onImageTaken(uri)
    }

    return (
       <View style={styles.imagePicker}>
           <View style={styles.imagePreview}>
          { !pickedImage ?<Text style={styles.imagePreview}>No Image Selected yet</Text>:
           <Image style={styles.image} source={{uri:pickedImage}} />}
           </View>
           <Button title="Take Photo" color={Colors.primary} onPress={takeImageHandler}/>
       </View>
    )
}
const styles = StyleSheet.create({
    imagePicker:{
        alignItems:"center"
    },
    imagePreview:{
        width:'100%',
        height:60,
       
        justifyContent:'center',
        alignItems:"center",
        borderColor: "#ccc"
    },
    image:{
        width:"100%",
        height:"100%"
    }

})

export default ImgPicker
