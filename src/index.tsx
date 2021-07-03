import React from 'react';
// import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

// import {
//   Lato_300Light,
//   Lato_400Regular,
//   Lato_700Bold,
//   useFonts,
// } from '@expo-google-fonts/lato';

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import { store, persistor } from './store';

import Routes from './routes';
import defaultTheme from './styles/themes/default';

export default function Index() {
//   const [fontsLoaded] = useFonts({
//     Lato_300Light,
//     Lato_400Regular,
//     Lato_700Bold,
//   });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Provider store={store}>
        <PersistGate persistor={persistor}> */}
          <StatusBar style="dark" backgroundColor="#ede8ed" />
          <Routes />
        {/* </PersistGate>
      </Provider> */}
    </ThemeProvider>
  );
}