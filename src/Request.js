import axios from "axios"

export async function getCounter(){
    return axios.get("/display",{
        baseURL: process.env.apiBaseURL,
        headers: { Accept: "application/json" }
    })
}

export async function counterIncrease(){
    return axios.get("/increase",{
        baseURL: process.env.apiBaseURL,
        headers: { Accept: "application/json" }
    })
}

export async function counterDecrease(){
    return axios.get("/decrease",{
        baseURL: process.env.apiBaseURL,
        headers: { Accept: "application/json" }
    })
}
