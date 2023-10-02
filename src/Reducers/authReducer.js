const { type } = require("@testing-library/user-event/dist/type")

const initialstate = {
   status : false,
   isClick : false,

}


const authReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case "LOGIN":
            return {status:true, isClick:true};
        case "LOGOUT":
            return {...state, status : false};
        default:
            return state;
    }

}

const formInitialstate = {
    fname : "",
    lname : ""
}

export const formReducer = (state = formInitialstate, {type, payload}) => {

    switch (type) {
        case "SUBMIT":
                return payload;
        case "RESETFORM":
                return { ...formInitialstate };
        default:
            return state;
    }

}
export default authReducer;