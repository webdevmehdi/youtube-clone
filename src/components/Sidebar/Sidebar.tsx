import React from "react";
import styles from './Sidebar.module.css'
type Props = {
  home: string;
  trending: string;
  subscription: string;
};

const Sidebar: React.FC<Props> = ({ home, trending, subscription }) => {
  return (
      
    <div>
       
<div className={styles.DrawerToggler} onClick={clicked}>

</div>
    )
      <ul>
        <li>
          <h1>{home}</h1>
        </li>
        <li>
          <h1>{trending}</h1>
        </li>
        <li>
          <h1>{subscription}</h1>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
