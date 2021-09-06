import React from 'react'
import { render } from 'react-testing-library'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import App from '../App'

describe('With React Testing Library', () => {
    const initialState = {output:10}
    const mockStore = configureStore();
    let store, wrapper

    it('Redux testing',()=>{
        store=mockStore(initialState);
        
        const {getByText} = render(<Provider store={store}><App/></Provider>)
        expect(getByText('REDUX TESTING')).toBeNull();
    })
})