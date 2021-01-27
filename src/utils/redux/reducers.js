import { combineReducers } from "redux";
import userLayout from "@layouts/user/redux/reducers";

const rootReducer = combineReducers({
  userLayout,
});

export default rootReducer;
