import s from "./style";
import bd from "/features/boards";
import React from "react";
import Boards from "../boards";
import Accordion from "/components/accordion";
import {useSelector} from "react-redux";


const View = React.memo(() => {
  const all = useSelector(bd.ids); 
  const starred = useSelector(bd.ids.starred);


  return all.length === 0 ? (
    <p>
      You have no boards yet! <br /> 
      Add one by clicking on the button below
    </p>
  ) : (
    <>
      <Accordion title="Starred Boards" Heading="h3" className={s.accordion}>
        <Boards 
          msg="Star boards so they appear here" 
          idBoards={starred} 
        />
      </Accordion>

      <Accordion title="All" Heading="h3" className={s.accordion}>
        <Boards idBoards={all} />
      </Accordion>
    </>
  );
});


export default View;