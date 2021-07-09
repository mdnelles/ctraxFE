import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import localStore from "../middleware/localstorage";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
   rootReducer,
   localStore.loadState(),
   composedEnhancer
);

store.subscribe(() => {
   const state = store.getState();
   //saveState = setItem
   localStore.saveState({
      user: (state && state.user) || {},
   });
});

export default store;
