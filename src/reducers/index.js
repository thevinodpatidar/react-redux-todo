import { combineReducers } from "redux";
import todos from "./todos";
import login from "./login";
import register from "./register";
import visibilityFilter  from "./visibilityFilter";

export default combineReducers({
    todos,
    visibilityFilter,
    login,
    register
})