import query from "./query";


function ApiQuerier({format, request, pending, rejected, fulfilled}) {


  return function thunk(meta) {
    return async (dispatch) => {
      dispatch(pending(meta));

      try {
        const body = await query(request(meta), format);
        dispatch(fulfilled(meta, body));
        return body;
      } 
      
      catch (error) {
        dispatch(rejected(meta, error));
        throw error;
      }
    };
  }


}


export default ApiQuerier;