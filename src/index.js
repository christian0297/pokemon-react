import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore }  from '@reduxjs/toolkit';
import pokemonListSaga from './store/sagas/pokemonListSaga';
import pokemonListReducer from "./store/slices/pokemonListSlice";

const saga = createSagaMiddleware();


const store = configureStore({
  reducer : {
    pokemonList: pokemonListReducer
  },
  middleware: [saga]
});
saga.run(pokemonListSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
