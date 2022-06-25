import lt from "/features/lists";
import bd from "/features/boards";
import ps from "/components/popupify/style";
import {ID} from "./constants";
import React from "react";
import popupify from "/components/popupify";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";


const BoardListAllOwnCardsMover = popupify(ID, ({payload: {idSourceList}}) => {
  const lists = useSelector(lt.many({idBoard: useSelector(bd.opened.id)}));
  const dispatch = useDispatch();
  const sourceList = useSelector(lt.one({id: idSourceList}));

  
  function commit(idTargetList: string) {
    dispatch(lt.moveAllOwnCards({
      idListA: idSourceList, 
      idListB: idTargetList,
    }));
  }


  return (
    <>
      <Header title="Move all cards in this list to: " />

      <section className={ps.body}>

        {sourceList ? (

          <ul className={ps.list}>

            {lists.map(({ id, title }) => (
              <li key={id} className={ps.li}>
                <Toggler
                  action="close"
                  onClick={() => commit(id)}
                  children={`${title}${id === idSourceList ? " (current)" : ""}`}
                  className={ps.btn}
                />
              </li>
            ))}

          </ul>

        ) : (

          <p>
            Unexpected error occoured. <br /> Try reloading the page.
          </p>

        )}
      </section>
    </>
  );
});


export default BoardListAllOwnCardsMover;