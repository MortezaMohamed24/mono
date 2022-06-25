import {D} from "./constants";


function is(dateA: Date, dateB: Date, loose = D) {
  let oldest = dateA.getTime();
  let latest = dateB.getTime();


  // latest should be later (larger) than oldest
  if (oldest > latest) {
    [oldest, latest] = [latest, oldest];
  }


  return latest - oldest <= loose;
}


export default is;