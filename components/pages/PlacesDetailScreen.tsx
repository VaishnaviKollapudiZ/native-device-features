import React, { useState } from 'react'
import { Text, View } from 'react-native'

function PlacesDetailScreen(props:any) {


   
    return (
       <View>
           <Text>PLACE DETAILS</Text>
           
       </View>
    )
}

export const PlacesDetailScreenOptions = (navigationData:any)=>{
    return{
        headerTitle : navigationData.route.params.placeTitle
    }
}
export default PlacesDetailScreen
