import axios from 'axios';


// actionはJavaScriptオブジェクトの1つで内部に「type」とtypeに対応する「値」を持っている
export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'


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


export const putEvent = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
    dispatch({ type: UPDATE_EVENT, response })
}


// 
export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: READ_EVENT, response })
}


// event更新画面から選択されたイベントのidを元に削除するための要求を行う
export const deleteEvent = id => async dispatch => {

    // 入力されたtitleとbodyを送信
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)

    // reducerにtype,responseをdispatchする
    dispatch({ type: DELETE_EVENT, id })
}

