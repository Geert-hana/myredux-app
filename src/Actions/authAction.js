export const Login = () => {

    return {
        type: 'LOGIN',
        payload: {}
    }

}

export const Logout = () => {

    return {
        type: 'LOGOUT',
        payload: {}

    }

}

export const SubmitForm = (user) => {

    return {
        type: 'SUBMIT',
        payload: user

    }

}

export const ResetForm = () => {

    return {
        type: 'RESETFORM',
        payload: {}

    }

}