import React from 'react';
import './App.css';
import PizzaHut from './components/PizzaHut';
import {Provider} from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='/' className='navbar-brand'>
          React Redux
        </a>
      </nav>

      <Provider store={store}>
        <PizzaHut />
      </Provider>
    </div>
  );
}

export default App;
