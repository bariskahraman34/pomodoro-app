export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case "Increment":
            return {
                ...state,
                counter: state.counter + payload
            };
        case "Decrement":
            return {
                ...state,
                counter: state.counter - payload
            };
        case "loginUser":
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
        case "logoutUser":
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
        default:
            return state;
    }
}