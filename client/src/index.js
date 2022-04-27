import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
     <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

