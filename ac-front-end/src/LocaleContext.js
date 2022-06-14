/* 
LocaleContext.js

Authors:
- A01749448 Jorge Chávez Badillo

Creation date: 12/05/2022
Last modification date: 12/05/2022

Program that shows the language selected. 
*/

//Import Modules
import React from "react";

const defaultValue = {
  locale: "en",
  setLocale: () => {},
};

export default React.createContext(defaultValue);
