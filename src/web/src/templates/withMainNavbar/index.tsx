import s from "./style";
import React from "react";
import Navbar from "/components/mainNavbar";
import BoardsPopup from "/components/boardsPopup";
import AccountPopup from "/components/userAccountPopup";
import NavbarListPopup from "/components/mainNavbarOtherButtonsPopup";
import BoardCreatorModule from "/components/boardCreatorModule";


const WithMainNavbarTemplate = ({children}: {children: React.ReactElement}) => (
  <>
    <main className={s.root}>
      <Navbar />

      <div>
        {children}
      </div>
    </main>

    <BoardsPopup />
    <AccountPopup />
    <NavbarListPopup />  
    <BoardCreatorModule />
  </>
);


export default WithMainNavbarTemplate;