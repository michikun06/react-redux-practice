import _ from 'lodash';
import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
} from "../action";

// actionから受け取ったtypeを適応してstateを更新する。
export default (events = {}, action) => {
    switch (action.type) {

        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }

        // 初期状態（componentDidMountで呼び出した）の外部からevent一覧情報を読み込むための関数
        case READ_EVENTS:
            // action/index.jsから参照したaction.response.data内にあるidをkeyに設定する
            return _.mapKeys(action.response.data, 'id')


        // 指定したidを削除する関数
        case DELETE_EVENT:
            // 指定したidを削除した状態でeventsオブジェクトを渡す
            delete events[action.id]
            // 削除後の更新したeventsを返す
            return { ...events }


        //　変更前の状態を返す
        default:
            return events
    }

}
