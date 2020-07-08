import { INCREMENT, DECREMENT } from "../action";

// stateの初期値を設定（今回はvalueだけ）
const initialState = { value: 0 }


// actionから受け取ったtypeを適応してstateを更新する。
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }

}
