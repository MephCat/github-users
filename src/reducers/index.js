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
                users: action.payload,
                loading: false
            };
        case 'USERS_SEARCH':
            return {
                users: action.payload,
                loading: false
            }
        case 'USER_LOADER':
            return {
                user: action.payload,
                loading: false
            }
        case 'USER_REPOS':
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
