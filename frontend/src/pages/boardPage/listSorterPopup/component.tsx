import lt from "/lists";
import ps from "/components/popupify/style";
import {ID} from "./constants";
import React from "react";
import {Header} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const BoardListSorterPopup = popupify(ID, ({payload: {idList}}) => {
  const list = useSelector(lt.one({id: idList}));
  const dispatch = useDispatch();


  return (
    <>
      <Header title="Sort cards" />
      <section className={ps.body}>
        {list ? (

          <>
            <ul className={ps.list}>
              <li className={ps.li}>
                <button 
                  title="Date created (newest first)"
                  onClick={() => dispatch(lt.sort({idList, method: "DATE_CREATED_ASCENDING" }))}
                  children="Date created (newest first)" 
                  className={ps.btn}
                />
              </li>
              <li className={ps.li}>
                <button 
                  title="Date ceated (oldest first)"
                  onClick={() => dispatch(lt.sort({idList, method: "DATE_CREATED_DESCENDING" }))}
                  children="Date ceated (oldest first)"
                  className={ps.btn}
                />
              </li>
              <li className={ps.li}>
                <button 
                  title="Card name (ascending)"
                  onClick={() => dispatch(lt.sort({idList, method: "ALPHABETICALLY_ASCENDING" }))}
                  children="Card name (ascending)"
                  className={ps.btn}
                />
              </li>
              <li className={ps.li}>
                <button 
                  title="Card name (descending)"
                  onClick={() => dispatch(lt.sort({idList, method: "ALPHABETICALLY_DESCENDING" }))}
                  children="Card name (descending)"
                  className={ps.btn}
                />
              </li>
            </ul>
          </>

        ) : (
          <>
            <p>Unexpected Error Occured.</p>
            <p>Try reloading the page</p>
          </>
        )}
      </section>
    </>
  );
});


export default BoardListSorterPopup;