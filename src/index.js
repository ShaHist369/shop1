import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from "react-redux";
import {BrowserRouter} from  'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import productReducer from './reducers/productReducer'
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsRCCuKAqt8eGFMvMqnep1Dm0NOmPzh4E",
    authDomain: "blue-and-purple.firebaseapp.com",
    databaseURL: "https://blue-and-purple.firebaseio.com",
    projectId: "blue-and-purple",
    storageBucket: "blue-and-purple.appspot.com",
    messagingSenderId: "494136267323",
    appId: "1:494136267323:web:6c2540a17d4f7f1148c21e",
    measurementId: "G-R0P2TP2W71"
}

firebase.initializeApp(firebaseConfig);



const reducers = combineReducers({
    productReducer,
    form:formReducer,
})
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose();

const store = createStore(reducers, composeEnhancers(applyMiddleware(loggerMiddleware,thunkMiddleware)));

function loggerMiddleware(store){
    return function(next){
        return function (action) {
            const result = next(action);
 //           console.log(result);
            return result
            
        }
    }
}


ReactDOM.render(
  <React.StrictMode>

          <Provider store={store}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
