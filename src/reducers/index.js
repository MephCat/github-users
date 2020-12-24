const initialState = {
    users: [],
    loading: true,
    user: {},
    repos: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USERS_LOADED':
            return {
                ...state,
                users: action.payload,
            };
        case 'USERS_SEARCH':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'USER_LOADER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'USER_REPOS':
            console.log('red', action.payload)
            return {
                repos: action.payload
            }
        case 'LOADING':
            return state = initialState
        default:
            return state;
    }
};

export default reducer;
