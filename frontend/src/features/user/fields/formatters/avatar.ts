import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {STRING} from "/util/formatter";


const avatar = OR([
  NULL(), 
  STRING(),
], {
  name: "User.avatar",
});


export default avatar;