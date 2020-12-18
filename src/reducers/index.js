const initialState = {
    users: [],
    loading: true,
    user: {}
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USERS_LOADED':
            return {
                users: action.payload,
            };
        case 'USERS_SEARCH':
            return {
                users: action.payload,
            }
        case 'USER_LOADER':
            return {
                user: action.payload,
            }
        case 'LOADING':
            return state = initialState
        default:
            return state;
    }
};

export default reducer;
