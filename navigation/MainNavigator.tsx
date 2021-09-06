import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"


import PlacesListScreen, { PlacesListScreenOptions } from "../components/pages/PlacesListScreen"
import PlacesDetailScreen, { PlacesDetailScreenOptions } from "../components/pages/PlacesDetailScreen"
import MapScreen, { MapScreenOptions } from "../components/pages/MapScreen"
import NewPlaceScreen, { NewPlaceScreenOptions } from "../components/pages/NewPlaceScreen"

import Colors from "../constants/Colors"
const MainStackNavigator = createStackNavigator();

const MainNavigator = () => {

    return (<MainStackNavigator.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }}>
        <MainStackNavigator.Screen name="PlacesListScreen" component={PlacesListScreen} options={PlacesListScreenOptions}/>
        <MainStackNavigator.Screen name="PlacesDetailScreen" component={PlacesDetailScreen} options={PlacesDetailScreenOptions}/>
        <MainStackNavigator.Screen name="MapScreen" component={MapScreen} options={MapScreenOptions} />
        <MainStackNavigator.Screen name="NewPlaceScreen" component={NewPlaceScreen} options={NewPlaceScreenOptions}/>
    </MainStackNavigator.Navigator>)
}

export default MainNavigator
