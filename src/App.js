
import React from 'react'

// Import data
import Directory from './directory';
import Gallery from './gallery';
import Searchbar from './searchbar';
import Sidebar from './sidebar';


// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Sidebar></Sidebar>
        <Searchbar></Searchbar>
        <Gallery></Gallery>
        <Directory></Directory>
      </div>
    </div>
  );
}

export default App;
