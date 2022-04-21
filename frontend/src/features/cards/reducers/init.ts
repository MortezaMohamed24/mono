import {useReducer} from "/store";
import editCard from "./reducers/edit";
import labelCard from "./reducers/label";
import addOneCard from "./reducers/addOne";
import createCard from "./reducers/create";
import unlabelCard from "./reducers/unlabel";
import destroyOneCard from "./reducers/destroyOne";
import {addManyLabels} from "/labels/reducers";
import {setCardLabels} from ".";
import {EDIT_PENDING} from "/cards/actions";
import {MOVE_PENDING} from "/cards/actions";
import {LABEL_PENDING} from "/cards/actions";
import {MOVE_FULFILLED} from "/cards/actions";
import {COPY_FULFILLED} from "/cards/actions";
import {CREATE_PENDING} from "/cards/actions";
import {DESTROY_PENDING} from "/cards/actions";
import {UNLABEL_PENDING} from "/cards/actions";
import {SET_LABELS_PENDING} from "/cards/actions";


useReducer(EDIT_PENDING, (state, {meta}) => {
  editCard(state, meta);
});

useReducer(COPY_FULFILLED, (state, {payload}) => {
  addManyLabels(state, payload.labels);
  addOneCard(state, payload.card);
});

useReducer(MOVE_PENDING, (state, {meta}) => {
  destroyOneCard(state, {idCard: meta.idCard});
});

useReducer(MOVE_FULFILLED, (state, {payload}) => {
  addManyLabels(state, payload.labels);
  addOneCard(state, payload.card);
});

useReducer(LABEL_PENDING, (state, {meta}) => {
  labelCard(state, meta);
});

useReducer(CREATE_PENDING, (state, {meta}) => {
  createCard(state, meta);
});

useReducer(DESTROY_PENDING, (state, {meta}) => {
  destroyOneCard(state, meta);
});

useReducer(UNLABEL_PENDING, (state, {meta}) => {
  unlabelCard(state, meta);
});

useReducer(SET_LABELS_PENDING, (state, {meta}) => {
  setCardLabels(state, meta);
});











// import {Slice} from "/store/slice";
// import {Reducer} from "/store/slice";
// import {useReducer} from "/store";
// import editCard from "./reducers/edit";
// import labelCard from "./reducers/label";
// import addOneCard from "./reducers/addOne";
// import createCard from "./reducers/create";
// import unlabelCard from "./reducers/unlabel";
// import destroyOneCard from "./reducers/destroyOne";
// import {addManyLabels} from "/labels/reducers";
// import {setCardLabels} from ".";
// import {EDIT_PENDING} from "/cards/actions";
// import {MOVE_PENDING} from "/cards/actions";
// import {LABEL_PENDING} from "/cards/actions";
// import {MOVE_FULFILLED} from "/cards/actions";
// import {COPY_FULFILLED} from "/cards/actions";
// import {CREATE_PENDING} from "/cards/actions";
// import {DESTROY_PENDING} from "/cards/actions";
// import {UNLABEL_PENDING} from "/cards/actions";
// import {SET_LABELS_PENDING} from "/cards/actions";
// import "./actions/init";
// import "./reducers/init";
// import {useSlice} from "../../store";
// import Collection from "/util/redux/collection";
// import {CardNative} from "./entity";


// const CARDS_SLICE_NAME = "cd";


// declare global {
//   export interface __INTERNAL_REDUX_STATE__ {
//     [CARDS_SLICE_NAME]: Collection<CardNative>;
//   }
// }

// const A = Slice({
//   name: "cd",
//   reducers: {
//     [EDIT_PENDING]: (state, {meta}) => {
//       editCard(state, meta);
//     },

//     [COPY_FULFILLED]: (state, {payload}) => {
//       addManyLabels(state, payload.labels);
//       addOneCard(state, payload.card);
//     },
    
//     [MOVE_PENDING]: (state, {meta}) => {
//       destroyOneCard(state, {idCard: meta.idCard});
//     },
    
//     [MOVE_FULFILLED]: (state, {payload}) => {
//       addManyLabels(state, payload.labels);
//       addOneCard(state, payload.card);
//     },
    
//     [LABEL_PENDING]: (state, {meta}) => {
//       labelCard(state, meta);
//     },
    
//     [CREATE_PENDING]: (state, {meta}) => {
//       createCard(state, meta);
//     },
    
//     [DESTROY_PENDING]: (state, {meta}) => {
//       destroyOneCard(state, meta);
//     },
    
//     [UNLABEL_PENDING]: (state, {meta}) => {
//       unlabelCard(state, meta);
//     },
    
//     [SET_LABELS_PENDING]: (state, {meta}) => {
//       setCardLabels(state, meta);
//     },
//   },
//   preloadedState: () => (
//     new Collection<CardNative>()
//   ),
// })

// useReducer(COPY_FULFILLED, (state, {payload}) => {
//   addManyLabels(state, payload.labels);
//   addOneCard(state, payload.card);
// });

// useReducer(MOVE_PENDING, (state, {meta}) => {
//   destroyOneCard(state, {idCard: meta.idCard});
// });

// useReducer(MOVE_FULFILLED, (state, {payload}) => {
//   addManyLabels(state, payload.labels);
//   addOneCard(state, payload.card);
// });

// useReducer(LABEL_PENDING, (state, {meta}) => {
//   labelCard(state, meta);
// });

// useReducer(CREATE_PENDING, (state, {meta}) => {
//   createCard(state, meta);
// });

// useReducer(DESTROY_PENDING, (state, {meta}) => {
//   destroyOneCard(state, meta);
// });

// useReducer(UNLABEL_PENDING, (state, {meta}) => {
//   unlabelCard(state, meta);
// });

// useReducer(SET_LABELS_PENDING, (state, {meta}) => {
//   setCardLabels(state, meta);
// });