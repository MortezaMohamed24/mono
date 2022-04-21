import {State} from "../../../../store";
import {ListDestroyAllOwnCardsRequestMeta} from "/lists/actions";


function destroyAllOwnCardsOfList({lt, cd, ct, cm}: State, {idList}: ListDestroyAllOwnCardsRequestMeta) {
  lt.updateOne({id: idList}, {idCards: []});
  cd.destroyMany({idList});
  ct.destroyMany({idList});
  cm.destroyMany({idList});
}


export default destroyAllOwnCardsOfList;