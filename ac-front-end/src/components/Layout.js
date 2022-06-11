/* 
Layout.js

Authors:
- A01749448 Jorge Chávez Badillo

Creation date: 26/05/2022
Last modification date: 26/05/2022

(Descripción)
*/

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
