import s from "./style";
import bd from "/boards";
import btn from "/style/button/style";           
import React from "react";
import PageWithMainNavigation from "/templates/withMainNavbar";

import {AllBoards} from "../boards";
import {useSelector} from "react-redux";
import {StarredBoards} from "../boards";

import * as DELETER from "/popups/deleter";
import * as MODULIFY from "/components/modulify";
import * as BOARD_THEMER from "../popups/themer";
import * as BOARD_CREATOR from "/modules/boardCreator";
import * as BOARD_OPTIONS from "../popups/options";
import * as BOARD_RENAMER from "../popups/renamer";


function Home() {
  const count = useSelector(bd.count);


  return (
    <>
      <PageWithMainNavigation>
        {count > 0 ? (
          <section className={s.home}>

            <StarredBoards />
            <AllBoards />

          </section>
        ) : (
          <section className={s["no-boards-msg"]}>

            <h2>
              You have no boards yet.
            </h2>
            
            <MODULIFY.Toggler 
              target={BOARD_CREATOR.ID} 
              children="Create One!" 
              className={`${btn.gray} ${btn.lg}`}
            />

          </section>
        )}
      </PageWithMainNavigation>


      <DELETER.Component />
      <BOARD_THEMER.Component />
      <BOARD_OPTIONS.Component />
      <BOARD_RENAMER.Component />
    </>
  );
}


// this component doesn't care about props
export default React.memo(Home, () => true);