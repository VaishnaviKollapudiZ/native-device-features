export const ADD_NEW_PLACE = "ADD_NEW_PLACE"
export const SET_PLACES = "SET_PLACES"


import * as FileSystem from "expo-file-system";
import { insertPlace ,fetchPlaces} from "../../helpers/db";
import ENV from "../../env"

export type placeAction = {
    type: string,
    id:string,
    title:string,
    imageClickedPath:string,
    address:string,

}
export type resultType = {
    insertId: number;
    rows: Object;
    rowsAffected: number;
  };
  export type placeType = Array<{
    address: string;
    id: number;
    imageUri: string;
    lat: number;
    lng: number;
    title: string;
  }>;
  export type placesResultType = {
    insertId: any;
    rows: { _array: Array<placeType>; length: number };
    rowsAffected: number;
  };


export const addNewPlace = (title:string,imageClickedPath:string,location:any)=>{

    return async(dispatch:any) => {

         const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleApiKey}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const resData = await response.json();

    if (!resData.results) {
      throw new Error("Something went wrong");
    }

    const address = resData.results[0].formatted_address;
        const fileName = imageClickedPath.split('/').pop();
        const newPath = FileSystem.documentDirectory?FileSystem.documentDirectory+fileName:""
        try{
            await FileSystem.moveAsync({
                from:imageClickedPath,
                to:newPath
            });
            const dbResult:any = await insertPlace(title,newPath,address,location.lat,location.lng);
            console.log(dbResult);
            dispatch({
                id:dbResult.insertId,
                type:ADD_NEW_PLACE,
                title:title,
                imageClickedPath:newPath,
                address: address,
                coords: { lat: location.lat, lng: location.lng },
            })
        }catch(err){
            console.log(err);
            throw err
        }
       
    }
    
}

export const loadPlaces = ()=>{
    return async (dispatch:any) => {

        try{
            const dbResult:any =  await fetchPlaces();
            console.log(dbResult);
            dispatch({
                type:SET_PLACES,
                places:[dbResult.rows._array]})
        }catch(err){
           
            console.log(err);
            throw err;
        }

    }
}
