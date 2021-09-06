import React from 'react'
import { View,Image,StyleSheet, TouchableOpacity } from 'react-native'
import ENV from "../../env"
import MapView from 'react-native-maps'


function MapPreview(props:any) {

    let imagePreviewUrl;
    if(props.location){
         imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}
    &key=${ENV.googleApiKey}`
    }
    const mapRegion={
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421 
    }
    return (
        
        <TouchableOpacity onPress={props.onPress} style={{...styles.mapPreview,...props.style}}>
            {/* {props.location ? <Image style={styles.mapImage} source={{uri:imagePreviewUrl}}/>:  props.children} */}
            {props.location ? <MapView
        style={styles.mapImage}
        region={mapRegion}
        />:  props.children}

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    mapPreview: {
       
        justifyContent:"center",
        alignItems:"center"
      },
      mapImage:{
        width:'100%',
        height: '100%'
      },
      map:{
        flex:1
    }
})


export default MapPreview
