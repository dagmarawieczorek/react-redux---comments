import {combineReducers} from "redux";
import {userReducer} from "./usersReducer";
import {commentsReducers} from "./commentsReducers";

export const rootReducer = combineReducers({
    comments: commentsReducers,
    users: userReducer,
});