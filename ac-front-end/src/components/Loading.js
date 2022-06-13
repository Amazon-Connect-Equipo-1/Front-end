/* 
Loading.js

Authors:
- A01749448 Jorge Chávez Badillo

Creation date: 12/05/2022
Last modification date: 10/06/2022

(Descripción)
*/

//Import Modules
import { SpinnerCircular } from "spinners-react";

function Loading() {
  return (
    <SpinnerCircular role="status">
      <span className="visually-hidden">Loading...</span>
    </SpinnerCircular>
  );
}

export default Loading;
