import React,{useEffect} from 'react'
import { FlatList, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducerType } from '../../App'
import DefaultHeaderButton from '../atoms/DefaultHeaderButton'
import PlaceItem from '../molecules/PlaceItem'


import * as placesActions from "../../store/action/PlaceAction"
function PlacesListScreen(props:any) {

  const listOfPlaces = useSelector((state:rootReducerType)=>{return state.placeReducer.places})
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(placesActions.loadPlaces());
  }, [dispatch])
  
  return (
        <FlatList
        data={listOfPlaces}
        keyExtractor = {item=>item.id}
        renderItem = {itemRow =>
            <PlaceItem imageUrl={itemRow.item.imageClickedPath} title={itemRow.item.title} address={null} 
        onSelect={()=>{props.navigation.navigate('PlacesDetailScreen',
        {placeTitle:itemRow.item.title, placeId:itemRow.item.id})
    
        }}/>
        }
        
        />
    )
}

export const PlacesListScreenOptions = (navigationData:any) =>{
    return {
        headerTitle: "ALL PLACES",
        headerRight: ()=>{
            return(
                <HeaderButtons HeaderButtonComponent={DefaultHeaderButton}>
                    <Item
                    title="ADD"
                    iconName="ios-add-circle-outline"
                    onPress= {()=>{navigationData.navigation.navigate('NewPlaceScreen')}}
                    />
                </HeaderButtons>
            )
        }
    }
}

export default PlacesListScreen