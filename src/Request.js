import axios from "axios"

export async function getCounter(){
    return axios.get("/display",{
        baseURL: process.env.apiBaseURL
    })
}

export async function counterIncrease(){
    return axios.get("/increase",{
        baseURL: process.env.apiBaseURL
    })
}
