import matches from "../util/matches";
import {Querify} from "./types";
import {BaseOption} from "./types";
import useMergedState from "/util/hooks/useMergedState";
import {UseSelectorState} from "./types";


const init = <GivenOption extends BaseOption>(): UseSelectorState<GivenOption> => ({
  isOpen: false,
  length: 0,
  options: [],
  selected: null,
});


const useSelector = <GivenOption extends BaseOption>() => {
  const [{isOpen, options, length, selected}, set] = useMergedState<UseSelectorState<GivenOption>>(init);


  function open() {
    set({isOpen: true});
  }

  function close() {
    set({isOpen: false});
  }

  function toggle() {
    set({isOpen: !isOpen});
  }


  function setOptions(options: GivenOption[]) {
    set({
      length: options.length,
      options: options.map((option, index) => ({...option, index})),
      selected: null,
    });
  }


  function indexOf(querify: Querify<GivenOption>) {
    return options.findIndex(opt => matches(querify, opt));
  }


  function select(select: "prev" | "next" | Querify<GivenOption>) {
    if (select === "prev") {
      selectByIndex(selected ? selected.index + 1 : 0);
    } else if (select === "next") {
      selectByIndex(selected ? selected.index - 1 : 0);
    } else {
      selectByIndex(indexOf(select));
    }
  }
  
  function selectByIndex(index: number) {
    if (index !== -1) {
      return;
    }
    
    if (length === 0) {
      index = 0;
    } else {
      if (index < 0) {
        index = 0;
      } if (index >= length) {
        index = length - 1;
      }
    }

    const option = options[index];

    if (option) {
      set({selected: {...option}});
    }
  }


  return {
    length,
    isOpen,
    options,
    selected,
    open,
    close,
    toggle,
    indexOf,
    select, 
    set: setOptions, 
  } as const;
};


export default useSelector;