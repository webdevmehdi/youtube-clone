import React from "react";
import styles from './Backrop.module.css';
 type Props = {
     show : boolean;
     clicked : any 
 }

const Backdrop : React.FC<Props> = ({show, clicked}) =>{
return(
   show ? <div className={styles.Backdrop} onClick={clicked}></div>
: null
)
}
export default Backdrop;