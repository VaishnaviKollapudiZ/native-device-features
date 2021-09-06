import React,{useState,useCallback} from 'react'
import { View, Text, ScrollView, TextInput, Button,StyleSheet } from 'react-native'
import Colors from "../../constants/Colors"
import {useDispatch} from "react-redux"
import * as PlaceAction from "../../store/action/PlaceAction"
import ImgPicker from '../molecules/ImgPicker'
import LocationPicker from '../molecules/LocationPicker'

function NewPlaceScreen(props:any) {

    const dispatch = useDispatch();

    const [enteredTitle, setEnteredTitle] = useState("");
    const [imageClickedPath, setImageClickedPath] = useState("");

    const [selectedLocation, setSelectedLocation] = useState({});

    const savePlaceHandler = () => {
        dispatch(PlaceAction.addNewPlace(enteredTitle, imageClickedPath, selectedLocation));
        props.navigation.goBack();
      };

    const locationPickedHandler = useCallback((location) => {
        setSelectedLocation(location);
      }, []);

    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput placeholder="Write a place" style={styles.textInput}  onChangeText={(text)=> setEnteredTitle(text)} value={enteredTitle} />
            <ImgPicker onImageTaken={(uri:string)=>setImageClickedPath(uri)}/>
            <LocationPicker navigation={props.navigation} route={props.route}
          onLocationPicked={locationPickedHandler}/>
            <Button  title="Save Place" color={Colors.primary} onPress={savePlaceHandler}/>
           
        </View>
        </ScrollView>
    )
}
export const NewPlaceScreenOptions = (navigationData:any)=>{
    return {
        headerTitle: "ADD A NEW PLACE"
    }
}

const styles = StyleSheet.create({
    form:{
        margin:30
    },
    label:{
        marginBottom: 15
    },
    textInput:{
        borderColor: "black",
        borderWidth: 2,
        paddingVertical:4,
        paddingHorizontal:2,
        marginBottom: 15

    },
    button:{
        marginBottom: 10
    }
})
export default NewPlaceScreen
