import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Importera funktion för att skapa en store i redux
import { createStore } from 'redux';
//Används för att göra vår store tillgänglig för våra komponenter
import  { Provider } from 'react-redux';
import movieReducer from './reducers/moviesReduser';

//redux är grundbibliotektet
//react-redux är biblioteket som används för att koppla ihop React med Redux

//Tar som parameter en reducer
const store = createStore(
 movieReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    {/* Gör store tillgängligt till vår React app */}
   <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
