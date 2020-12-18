
const usersLoader = (newUsers) => {
    return {
        type: 'USERS_LOADED',
        payload: newUsers
    }
}
const usersSearch = (newUsers) => {
    return {
        type: 'USERS_SEARCH',
        payload: newUsers
    }
}
const userLoader = (newUser) => {
    return {
        type: 'USER_LOADER',
        payload: newUser
    }
}
const loadingInfo = (loading) => {
    return {
        type: 'LOADING',
        payload: loading
    }
}
export {
    usersLoader,
    usersSearch,
    userLoader,
    loadingInfo
}