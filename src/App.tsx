import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar'
 const App = () => {
  return (
    <div className="app">
      
      <Header />
     
     <Sidebar 
     
    home  = {"Home"}
    trending = {"Trending"}  
    subscription = {"Susbcription"}
     
     /> 
    </div>
  );
}

export default App;
