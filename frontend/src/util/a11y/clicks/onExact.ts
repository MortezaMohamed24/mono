import stop from "/util/event/stop";
import {StopCode} from "/util/event/stop";


type Event = MouseEvent | React.MouseEvent;

interface Listener {
  (event: Event): void;
}

const exact = (listener: Listener, stopCode: StopCode = "dip") => (event: Event) => {
  // if there is a current target and if current target is target
  if (event.currentTarget && event.currentTarget === event.target) {
    listener(event);
    stop(event, stopCode);
  }
};


export default exact;