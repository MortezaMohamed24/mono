import fetch from "../../util/fetch";


function ApiQuerier({format, request, pending, rejected, fulfilled}) {
  function thunk(meta) {
    return async (dispatch) => {
      dispatch(pending(meta));

      try {
        const body = await fetch({
          format: format, 
          request: request(meta),
        });
        
        dispatch(fulfilled(meta, body));
        
        return body;
      } 
      
      catch (error) {
        dispatch(rejected(meta, error));
        throw error;
      }
    };
  }


  thunk.pending = pending;
  thunk.rejected = rejected;
  thunk.fulfilled = fulfilled;


  return thunk;
}


export default ApiQuerier;