/**
 * We purposely added 2 reducers for the example of combineReducers method.
 * There can be only 1 or even more than 2 reducers.
 * combineReducers defines the structure of the store object.
 */
import { combineReducers } from "redux";
import { authReducer } from "../../redux/reducers/authReducer";
import { messageReducer } from "../../redux/reducers/messageReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});
