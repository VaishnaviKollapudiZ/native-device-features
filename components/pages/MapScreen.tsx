import React, { useState,useCallback,useEffect } from 'react'
import { View ,Text,StyleSheet, TouchableOpacity} from 'react-native'
import MapView ,{Marker}from 'react-native-maps'

function MapScreen(props:any) {
    const [selectedLocation, setSelectedLocation] = useState({lat:0,lng:0})
    const mapRegion={
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421 
    }
    const selectLocationHandler = (event: {
        nativeEvent: { coordinate: { latitude: number; longitude: number } };
      }) => {
        setSelectedLocation({
          lat: event.nativeEvent.coordinate.latitude,
          lng: event.nativeEvent.coordinate.longitude,
        });
      };

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
          return;
        }
        props.navigation.navigate("NewPlaceScreen", { pickedLocation: selectedLocation });
      }, [selectedLocation]);

      useEffect(() => {
        props.navigation.setOptions({
          headerRight: () => {
            return (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={savePickedLocationHandler}
              >
                <Text style={styles.headerButtonText}>Save</Text>
              </TouchableOpacity>
            );
          },
        });
      }, [savePickedLocationHandler]);
    

    let markerCoordinates:any;

    if(selectedLocation){
        const {lat,lng} = selectedLocation
        markerCoordinates={
            latitude:selectedLocation.lat,
            longitude: selectedLocation.lng

        }
    }
    return (
        <MapView
        style={styles.map}
        region={mapRegion}
        onPress={selectLocationHandler}
        >

            <Marker title="Picked Location" coordinate={{latitude:markerCoordinates.latitude,longitude:markerCoordinates.longitude}}/>
        </MapView>
    )
}

export const MapScreenOptions =   (navData:any) =>{
   
    return{
        headerTitle: "Pick A Location",
        
    }
}
const styles = StyleSheet.create({
    map:{
        flex:1
    },
    headerButton:{
        marginHorizontal:20
    },
    headerButtonText:{
        fontSize:16,
        color: "white"
    }
})
export default MapScreen
