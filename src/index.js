import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import store from 'redux/configureStore';
import theme from 'configs/chakraTheme';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
