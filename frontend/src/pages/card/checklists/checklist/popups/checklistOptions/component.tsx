import cm from "/checkitems";
import ct from "/checklists";
import ps from "/components/popupify/style";
import {ID} from "./constants";
import React from "react";
import {Header} from "/components/popupify";
import ellipsify from "/util/string/ellipsify";
import {Toggler} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ChecklistNative} from "/checklists/entity";
import {DELETER_POPUP_ID} from "/popups/deleter";


const ChecklistOptionsPopup = popupify(ID, ({reference, payload: {idChecklist}}) => {
  const dispatch = useDispatch();
  const checklist = useSelector(ct.one({id: idChecklist}));
  

  function destroy() {
    if (checklist) {
      dispatch(ct.destroy({idChecklist}));
    }
  }


  return (
    <>
      <Header title={checklist?.title || "Checklist"} />

      <section className={ps.body}>
        {checklist ? (

          <ul className={ps.list}>
            <FilteringButton checklist={checklist} />

            <li className={ps.li}>
              <Toggler
                action="open"
                target={DELETER_POPUP_ID}
                zIndex={75765}
                payload={{
                  title: `Delete: ${checklist.title ? ellipsify(checklist.title, 10) : "Untitled"}?`,
                  body: `Are you sure you want to delete checklist: ${checklist.title || "Untitled"}`,
                  commit: destroy,
                }}
                children="Delete"
                reference={reference}
                className={ps.btn}
              />
            </li>
          </ul>

        ) : (

          <p>
            Unexpected error occured.
            <br />
            Try reloading the page.
          </p>

        )}
      </section>
    </>
  );
});

const FilteringButton = ({checklist}: {checklist: ChecklistNative}) => {
  const count = useSelector(cm.count({idChecklist: checklist.id}));
  const dispatch = useDispatch();


  function toggle() {
    dispatch(ct.edit({
      filter: checklist.filter === "ALL" ? "INCOMPLETE" : "ALL",
      idChecklist: checklist.id, 
    }));
  }

  return count.complete === 0 ? null : (
    <li className={ps.li}>
      <Toggler action="close" onClick={toggle} className={ps.btn}>

        {checklist.filter === "ALL" ? (
          "Hide checked items"
        ) : (
          `Show checked items (${count.complete})`
        )}

      </Toggler>
    </li>
  );
};

export default ChecklistOptionsPopup;