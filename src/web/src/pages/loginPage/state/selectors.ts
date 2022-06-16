import {State} from "/store";


const error = ({lg}: State) => (
  lg.error
);

const status = ({lg}: State) => (
  lg.status
);

const username = ({lg}: State) => (
  lg.username
);

const password = ({lg}: State) => (
  lg.password
);

const validity = ({lg}: State) => (
  lg.username.isValid && lg.password.isValid
);

username.value = ({lg}: State) => (
  lg.username.value
);

password.value = ({lg}: State) => (
  lg.password.value
);

username.isValid = ({lg}: State) => (
  lg.username.isValid
);

password.isValid = ({lg}: State) => (
  lg.password.isValid
);


export {error, status, username, password, validity};
export default Object.freeze({error, status, username, password, validity});