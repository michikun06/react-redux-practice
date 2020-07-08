import axios from 'axios';


// actionはJavaScriptオブジェクトの1つで内部に「type」とtypeに対応する「値」を持っている
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'


const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'


// events一覧画面を表示する
// 外部のAPIサーバーに対してevent一覧を表示するためのリクエストを送る処理を行う
export const readEvents = () => async dispatch => {

    // 初期状態のevent一覧が格納されているURLをresponseに格納
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)

    // reducerにtype,responseをdispatchする
    dispatch({ type: READ_EVENTS, response })
}



// eventsを作成し、events一覧画面に追加する
export const postEvent = values => async dispatch => {

    // 入力されたtitleとbodyを送信
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)

    // reducerにtype,responseをdispatchする
    dispatch({ type: CREATE_EVENT, response })
}

