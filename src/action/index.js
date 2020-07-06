// actionはJavaScriptオブジェクトの1つで内部に「type」とtypeに対応する「値」を持っている

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})

