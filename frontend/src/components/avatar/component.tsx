import ur from "/features/user";
import React from "react";
import {Props} from "./types";
import {useState} from "react";
import {useSelector} from "react-redux";


const Avatar = React.memo(({imgClass, initialsClass}: Props) => {
  const user = useSelector(ur.user);
  const [view, setView] = useState("AVATAR");


  if (user.$status !== "succeeded") {
    throw new Error(
      "<Avatar /> component could not render because the user state is not available"
    );
  }


  return view === "AVATAR" && user.avatar ? (
    <img 
      src={user.avatar} 
      alt={user.username} 
      title={`${user.username} - ${user.firstname} ${user.lastname}`} 
      onError={() => setView("INITIALS")}
      className={imgClass} 
    />
  ) : (
    <p
      title={`${user.username} - ${user.firstname} ${user.lastname}`}
      children={user.initials}
      className={initialsClass}
    />
  );
});


export default Avatar;