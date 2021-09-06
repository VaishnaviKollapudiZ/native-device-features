import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux"
import {createStore, combineReducers, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {init} from "./helpers/db"

init().then(()=>{
  console.log('Initializing db')
}).catch((err: any)=>{
  console.log('Initializing db failed' );
  console.log(err)
})



import PlaceReducer from "./store/reducers/PlaceReducer"

import MainNavigator from "./navigation/MainNavigator"

export type rootReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  placeReducer: PlaceReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//type of the root reducer

export default function App() {
  return (
    <Provider store={store}>
   <NavigationContainer>
     <MainNavigator/>
   </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
