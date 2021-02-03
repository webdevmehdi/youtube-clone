import React from "react";
import NavigationItems from "../NavigationItems/NavigationsItems";

type Props = {
open : boolean;
closed : boolean;

}
const Sidebar: React.FC<Props> = ({open, closed}) => {
  if(open === true)
  return (
    
    <div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
};
export default Sidebar;
