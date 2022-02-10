import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'


const rootElement = document.getElementById('root')
ReactDOM.render(
  // <Provider store={store}>
     <BrowserRouter>   
      <App /> 
     </BrowserRouter> 
  
  // </Provider>
,
  rootElement
);

