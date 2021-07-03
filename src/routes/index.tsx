import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { setNavigator } from '~/services/navigate';

import AuthStack from './auth.routes';
import AppStack from './app.routes';
// import useAuth from '../src/contexts/auth';
// import IsLoading from '../src/components/Loading';

function Routes() {
  // const { logged, loading } = useAuth();

  // if (loading) {
  //   return <IsLoading />;
  // }

  return (
    
    <NavigationContainer ref={setNavigator}>
      {/* { logged? */}
       {/* <AppStack />   */}
       {/* : */}
        <AuthStack />
    </NavigationContainer>
  );
}

export default Routes;
