import s from "./style";
import bd from "/features/boards";
import btn from "/style/button/style";           
import React from "react";
import {AllBoards} from "../boards";
import {useSelector} from "react-redux";
import * as DELETER from "/components/deleterPopup";
import * as MODULIFY from "/components/modulify";
import * as BOARD_THEMER from "../boardThemerPopup";
import * as BOARD_CREATOR from "/components/boardCreatorModule";
import * as BOARD_OPTIONS from "../boardOptionsPopup";
import * as BOARD_RENAMER from "../boardRenamerPopup";
import {StarredBoards} from "../boards";
import PageWithMainNavigation from "/templates/withMainNavbar";


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


export default React.memo(Home);