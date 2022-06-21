import { loginFailure, loginStart, loginSuccess } from './userRedux'
import { publicRequest } from '../requestMethods';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        console.log(user)
        const res = await publicRequest.post("auth/login", user);
        dispatch(loginSuccess(res.data))
    }
    catch (error) {
        console.log("Failed Login")
        dispatch(loginFailure())

        if (error.response) {
            console.log(error.response)

        } else if (error.request) {
            console.log("response request")
        } else if (error.message) {
            console.log(error.message)
        }

    }
}

export const logout = async (dispatch) => {
    try {
        window.onbeforeunload = function () {
            localStorage.clear();
        }
        console.log("Logged Out")
    }
    catch (err) {
        console.log("Error logging out")
        console.log(err)
    }
}