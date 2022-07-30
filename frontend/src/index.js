import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension"; //Middleware
import thunk from "redux-thunk"; // put it in middleware
import {store} from "./Admin/redux/store/store";
import RootReducer from "./Store/Reducer/SignIn"; // import rootReducer from my folder store
// import { createStore, applyMiddleware, compose } from "redux";//create store
// const middleware = [thunk];

// const store = createStore(
//   RootReducer,

//   composeWithDevTools(applyMiddleware(...middleware))
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
