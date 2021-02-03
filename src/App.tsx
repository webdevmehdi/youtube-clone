import React ,{useState} from 'react';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar'
import Backdrop from './components/UI/Backdrop/Backdrop'
 const App = () => {

const [showSidebar, SetShowSidebar] = useState(true);

  const showSidebarHandler = () => {
    SetShowSidebar(currentState => !currentState);
  }

  const hideSidebarHandler = () => {
    SetShowSidebar(false)
  }



  return (
    <div className="app">
      
      <Header />
      <Backdrop show = {showSidebar} clicked = {hideSidebarHandler}/>
      <Sidebar open = {showSidebar}  closed = {showSidebar}/>
    </div>
  );
}

export default App;
