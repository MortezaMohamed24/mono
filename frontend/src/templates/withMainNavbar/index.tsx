import s from "./style";
import React from "react";
import Navbar from "/core/components/mainNavbar";
import {BoardsPopup} from "/popups/boards";
import {BoardCreator} from "/modules/boardCreator";
import {AccountPopup} from "/popups/account";
import {NavbarListPopup} from "/core/components/mainNavbar/list";


const WithMainNavbarTemplate = ({children}: {children: React.ReactElement}) => (
  <>
    <main className={s.root}>
      <Navbar />

      <div>
        {children}
      </div>
    </main>

    <BoardsPopup />
    <BoardCreator />
    <AccountPopup />
    <NavbarListPopup />  
  </>
);


export default WithMainNavbarTemplate;