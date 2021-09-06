import React from 'react'

import {fireEvent, render} from "@testing-library/react-native"

import NewPlaceScreen from "../components/pages/NewPlaceScreen";
import { Button } from 'react-native';

test('Check the TITLE TEXT', () => {
    
    const {getByPlaceholderText,getByText,getAllByText} = render(<NewPlaceScreen/>);
    fireEvent.changeText(
        getByPlaceholderText('Write a place'),'Hyderabad'
    );
    fireEvent.press(getByText('Save Place'));

    const textElements = getAllByText('Hyderabad');
    expect(textElements).toHaveLength(1);
})

test('Check save Place Button',()=>{

    const mockFunction = jest.fn();
    const {getByText} = render(<Button title="Save Place" onPress={mockFunction}/>)

    fireEvent.press(getByText("Save Place"));
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction.mock.calls.length).toBe(1);

    fireEvent.press(getByText("Save Place"));
    expect(mockFunction.mock.calls.length).toBe(2);

})
