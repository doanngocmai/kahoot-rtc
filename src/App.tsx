import React from 'react';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {AppViews} from "./views";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "./redux/store";

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  }
})

function App() {
  return (
    <ReduxProvider store={store}>
      <NextUIProvider theme={darkTheme}>
        <div className="App">
          <AppViews/>
        </div>
      </NextUIProvider>
    </ReduxProvider>
  );
}

export default App;
