

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
import { usersApiSlice } from './PostFeatures/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
storePost.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
storePost.dispatch(usersApiSlice.endpoints.getUsers.initiate());

// import { createStore, applyMiddleware, compose } from "redux";//create store
const middleware = [thunk];

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



















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { storePost } from './app/store';
// import { Provider } from 'react-redux';
// import { extendedApiSlice } from './PostFeatures/posts/postsSlice';
// import { usersApiSlice } from './PostFeatures/users/usersSlice';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  import reportWebVitals from './reportWebVitals';


//  import { composeWithDevTools } from "redux-devtools-extension"; 
 //Middleware
//  import thunk from "redux-thunk"; 
 // put it in middleware
// import { createStore, applyMiddleware, compose } from "redux";
//create store
//  import RootReducer from "./Store/Reducer/SignIn"; 
 // import rootReducer from my folder store
 
//  const middleware = [thunk];
//  const store = createStore(
//   RootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
//  );


//ahmad
// storePost.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
// storePost.dispatch(usersApiSlice.endpoints.getUsers.initiate());

// ReactDOM.render(
//   <React.StrictMode>
//      {/* <Provider store={store}> 
//        <App />
//     </Provider> */}
//     <Provider store={storePost}>
//       <Router>
//         <Routes>
//           <Route path="/*" element={<App />} />
//         </Routes>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


















