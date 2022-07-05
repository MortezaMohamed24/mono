import {State} from "/store";
import ApiQuerier from "/api/querier/query";


function onLoadRejected(state: State, error: unknown) {
  state.ur = {
    $error: verbalizeError(error), 
    $status: "failed",
  };
}

function verbalizeError(error: unknown): string {
  switch (error) {
    case ApiQuerier.BODY_ERROR: 
      return "An unexpected error occured: Server responded with invalid data. \n Try again later";
    case ApiQuerier.CONNECTION_ERROR: 
      return "Couldn't connect to the server, check your connection and proxy settings or try again later";
    case ApiQuerier.INTERNAL_SERVER_ERROR: 
      return "Something on the server went wrong, try again later";
    default: 
      return "An unkown error occured.\nTry reloading the page ";
  }
}


export default onLoadRejected;