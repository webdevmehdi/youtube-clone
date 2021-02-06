import React from "react";
import styles from './Backdrop.module.css'
 type Props = {
     show : boolean;
     closed : ()=> void ; 
 }

const Backdrop : React.FC<Props> = ({show, closed}) =>{
return(
   show ? <div className={styles.Backdrop} onClick={closed }></div>
: null
 
)
}
export default Backdrop;