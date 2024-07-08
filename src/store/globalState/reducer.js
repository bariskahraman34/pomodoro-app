import { initialState } from "../constants";

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
        case "changeColorMode":
            return {
                ...state,
                colorMode: payload
            }
        case "changeTime":
            return{
                ...state,
                time: {
                    ...state.time,
                    [payload.key] : payload.value
                }
            }
        case "changeCountDown":
            return{
                ...state,
                isStarted:!state.isStarted
            }
        case "changeCurrentTime":
            return{
                ...state,
                currentTime: payload
            }
        case "changeIsFinished":
            return {
                ...state,
                isFinished: payload
            }
        default:
            return state;
    }
}