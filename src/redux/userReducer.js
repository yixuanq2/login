const initialState = {
    isLogin: false,
}
export default function userReducer(state = {...initialState}, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
            };
        default:
            return state;
    }
}