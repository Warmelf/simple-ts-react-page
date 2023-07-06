import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Reviews from './components/reviews/Reviews';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Header store={store}/>
      <main>
        <Reviews store={store}/>
      </main>
    </div>
   
  );
}

export default App;
