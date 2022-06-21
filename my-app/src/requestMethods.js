import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODVjMGU0NmEzM2Q4MGFlMjYyNzc0YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzE1MTgxNywiZXhwIjoxNjUzNDExMDE3fQ.A5avr4ADkkk3fxXDotEiLL58XuNvTucQn_38FYBzZ48"
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODkwZmM1NzQ3NjMyN2MzM2QzZWI3MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMxNDk4NDEsImV4cCI6MTY1MzQwOTA0MX0.I_bHXsrfn8JFF25m0nJ2458y4SK2frfwQggoJwBf0Vs";

    // 'JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})
export const addProductRequest = axios.create({
    baseURL: BASE_URL,

    // header: { token: `Bearer ${TOKEN}` }
})