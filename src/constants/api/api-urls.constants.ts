 enum API_URLS {
    baseURL = 'https://markbooks-api.herokuapp.com',
    socketChatUrl = 'wss://markbooks-api.herokuapp.com/chat',
    login = '/api/users/login',
    reg = '/api/users/registration',
    logout = '/api/users/logout',
    getPublicList = '/api/markbooks/all',
    getByIdPublicMarksItem = '/api/markbooks/all',
    updatePrivateMarksItem = '/api/markbooks/mymarkbooks',
    getAllPrivateMarksItems = '/api/markbooks/mymarkbooks',
    createMarksItem = '/api/markbooks/mymarkbooks',
    getByIdPrivateMarksItem = '/api/markbooks/mymarkbooks',
    addComment = '/api/comment',
    getAllMarksComments = '/api/comment',
}

export default API_URLS;