import s from "./style";
import ur from "/features/user";
import ps from "/components/popupify/style";
import {ID} from "./constants";
import React from "react";
import Avatar from "/components/avatar";
import {Header} from "/components/popupify";
import popupify from "/components/popupify";
import typeography from "/style/typeography/style";
import {useSelector} from "/store";


const UserAccountPopup = popupify(ID, () => {
  const user = useSelector(ur.user);

  return (
    <>
      <Header title="Account" />

      <section className={ps.body}>
        {user.$status === "succeeded" ? ( 
          <>
            <header className={s.header}>
              <h3 className={s.username}>{user.username}</h3>
              <p className={`${s["full-name"]} ${typeography.xxs}`}>{`${user.firstname} ${user.lastname}`}</p>
              <Avatar imgClass={s.img} initialsClass={s.initials} />
            </header>

            <ul className={ps.list}>
              <li className={ps.divider} tabIndex={-1}></li>
              
              <li className={ps.li}>
                <a className={ps.btn} href="#">Profile And visiablity</a>
              </li>
              <li className={ps.li}>
                <a className={ps.btn} href="#">Activity</a>
              </li>
              <li className={ps.li}>
                <a className={ps.btn} href="#">Cards</a>
              </li>
              <li className={ps.li}>
                <a className={ps.btn} href="#">Settings</a>
              </li>

              <li className={ps.divider} tabIndex={-1}></li>
              
              <li className={ps.li}>
                <a className={ps.btn} href="#">Help</a>
              </li>

              <li className={ps.li}>
                <a className={ps.btn} href="#">Shortcuts</a>
              </li>

              <li className={ps.divider} tabIndex={-1}></li>

              <li className={ps.li}>
                <button className={ps.btn} onClick={() => { /** TODO: Implement a logout function */ }}>Log Out</button>
              </li>

            </ul>
          </>
        ) : (
          <p>Error: Not loged in! 🤪</p>
        )}
      </section>
    </>
  );
});


export default UserAccountPopup;