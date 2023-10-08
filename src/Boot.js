import React from 'react';
import { Provider } from 'react-redux';
import NavigationScreen from './Screens/NavigationScreen';
import { store } from './Store';
const Boot = () => {


        return (

                        <Provider store={store}>
                                <NavigationScreen />
                        </Provider>


        )
}

export default Boot;
