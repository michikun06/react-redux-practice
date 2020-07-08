import _ from 'lodash';
import { READ_EVENTS } from "../action";

// actionから受け取ったtypeを適応してstateを更新する。
export default (events = {}, action) => {
    switch (action.type) {

        // 初期状態（componentDidMountで呼び出した）の外部からevent一覧情報を読み込むための関数
        case READ_EVENTS:
            // action/index.jsから参照したaction.response.data内にあるidをkeyに設定する
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }

}
