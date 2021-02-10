import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import "./App.css";
import VideosContainer from "./components/VideosContainer/VideosContainer";
const App = () => {
  const [showSidebar, SetShowSidebar] = useState(false);

  /* const showSidebarHandler = () => {
    SetShowSidebar(currentState => !currentState);
  }
 */
  const togglerHandler = () => {
    SetShowSidebar((currentState) => !currentState);
  };

  const hideSidebarHandler = () => {
    SetShowSidebar(false);
  };

  return (
    <div>
      <div>
        <Header toggler={togglerHandler} />
        <Backdrop show={showSidebar} closed={hideSidebarHandler} />
      </div>

      <div className="Container">
        <div className="Sidebar">
          <Sidebar open={showSidebar} />
        </div>

        <div className="RecommendedVideos">
          <VideosContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
