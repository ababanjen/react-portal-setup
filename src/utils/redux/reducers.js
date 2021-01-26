import { combineReducers } from "redux";
import UserLayout from "@layouts/UserLayout";
import UserPages from "@pages/User/Dashboard";

const rootReducer = combineReducers({
  UserLayout,
  UserPages,
});

export default rootReducer;
