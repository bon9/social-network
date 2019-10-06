import { createStore, combineReducers } from "redux";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebarPage: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer
});

const store = createStore(rootReducers);
window.store = store;
export default store;
