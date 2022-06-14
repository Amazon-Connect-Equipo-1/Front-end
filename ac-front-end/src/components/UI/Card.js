/* 
Card.js

Authors:
- A01750145 Miguel Ángel Pérez López

Creation date: 29/04/2022
Last modification date: 29/04/2022

Program that contains the template of a card. 
*/

//Import Modules
import classes from "../../styles/UI/Card.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
