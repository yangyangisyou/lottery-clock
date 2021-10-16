import { combineReducers } from "redux";
import clock from "./clock";

const allReducers = combineReducers({
  clock,
});

export default allReducers;
