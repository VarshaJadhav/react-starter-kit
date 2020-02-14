import React from 'react';
import './App.css';
import SiteRouter from '../routers';
import { Provider } from 'react-redux'
import Store from '../redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <SiteRouter />
      </Provider>
    </div>
  );
}

export default App;
