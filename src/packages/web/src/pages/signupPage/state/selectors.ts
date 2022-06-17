import {State} from "/store";


export const error = ({sp}: State) => (
  sp.error
);

export const status = ({sp}: State) => (
  sp.status
);

export const validity = ({sp}: State) => (
  sp.username.isValid && sp.password.isValid && sp.lastname.isValid && sp.firstname.isValid
);

export const username = ({sp}: State) => (
  sp.username
);

export const password = ({sp}: State) => (
  sp.password
);

export const lastname = ({sp}: State) => (
  sp.lastname
);

export const firstname = ({sp}: State) => (
  sp.firstname
);

username.value = ({sp}: State) => (
  sp.username.value
);

password.value = ({sp}: State) => (
  sp.password.value
);

lastname.value = ({sp}: State) => (
  sp.lastname.value
);

firstname.value = ({sp}: State) => (
  sp.firstname.value
);

username.isValid = ({sp}: State) => (
  sp.username.isValid
);

password.isValid = ({sp}: State) => (
  sp.password.isValid
);

lastname.isValid = ({sp}: State) => (
  sp.lastname.isValid
);

firstname.isValid = ({sp}: State) => (
  sp.firstname.isValid
);


export default Object.freeze({
  error, 
  status, 
  validity,
  username, 
  password, 
  lastname, 
  firstname, 
});