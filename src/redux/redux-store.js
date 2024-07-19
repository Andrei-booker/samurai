import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
  appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

window.__store__ = store;

export default store;
