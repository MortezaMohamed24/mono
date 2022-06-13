import {State} from "/store";
import {UserRaw} from "/features/user/entity";
import {addManyBoards} from "/features/boards/reducers";


function initUser(state: State, userRaw: UserRaw) {
  state.ur = {
    id: userRaw.id,
    avatar: userRaw.avatar,
    $error: null,
    $status: "succeeded",
    idBoards: [],
    initials: userRaw.initials,
    username: userRaw.username,
    lastname: userRaw.lastname,
    firstname: userRaw.firstname,
  };
  
  addManyBoards(
    state, 
    userRaw.boards.map(board => ({...board, idUser: userRaw.id})),
  );
}


export default initUser;