import { combineReducers } from "redux";
import count from './count';
// import src from "*.bmp";


// const reducer = combineReducers({
//     count
// });
// export default reducer
// 
// 上記と同様のことを下記1行でやっている


// src / index.jsのstoreに更新したstateを入れる
export default combineReducers({ count })