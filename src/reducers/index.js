import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import events from './events';
// import src from "*.bmp";


// const reducer = combineReducers({
//     events
// });
// export default reducer
// 
// 上記と同様のことを下記1行でやっている


// src / index.jsのstoreに更新したstateを入れる
export default combineReducers({ events, form })