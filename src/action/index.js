// actionはJavaScriptオブジェクトの1つで内部に「type」とtypeに対応する「値」を持っている

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
