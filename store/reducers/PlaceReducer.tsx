import Place from "../../models/Place";
import { ADD_NEW_PLACE, placeAction, SET_PLACES } from "../action/PlaceAction"

const initialState:any = {
    places:[]
}

const PlaceReducer = (state:any=initialState,action:any)=>{
    switch(action.type){

        case ADD_NEW_PLACE:
            const newPlace = new Place(action.id.toString(), action.title,action.imageClickedPath)
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
           
        case SET_PLACES:
            return {
                places: action.places.map(
                    (pl: {
                      id: { toString: () => string };
                      title: string;
                      imageUri: string;
                      
                    }) =>
                      new Place(
                        pl.id.toString(),
                        pl.title,
                        pl.imageUri,
                        
                      )
                  ),
            }
        default: return state;
    }
}

export default PlaceReducer;