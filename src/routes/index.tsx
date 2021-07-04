import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { setNavigator } from '~/services/navigate';
import { DefaultRootState } from '~/store/@types';
import AppStack from './app.routes';
import AuthStack from './auth.routes';

function Routes() {
    const { isLogged } = useSelector((state: DefaultRootState) => state.auth);

    return (
        <NavigationContainer ref={setNavigator}>
            {isLogged ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default Routes;
