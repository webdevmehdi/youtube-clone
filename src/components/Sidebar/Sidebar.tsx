import React from "react";
//import AuxComponent from "../../HOC/AuxComponents";
import NavigationItems from "../NavigationItems/NavigationsItems";
import styles from "./Sidebar.module.css";
type Props = {
  open: boolean;
};

const Sidebar: React.FC<Props> = ({ open}) => {
  return open ? (
  
     
    <div className={styles.SidebarOpen}>
       <img
          style={{ width: "200px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1920px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
         <div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
    </div>
  
     
     
      
   
  ) : (
    <div className={styles.SidebarClose}>
       <img
          style={{ width: "200px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1920px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
         <div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
    </div>
  );
};
export default Sidebar;

/* <div className={styles.SidebarOpen}>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  ) : (
    <div>
      <div className={styles.SidebarClose}>
        <nav>
          <NavigationItems />
        </nav>
      </div> */

         /*  <Backdrop show={open} closed={closed} /> */