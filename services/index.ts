import axios from 'axios'

const baseURL = 'https://fakestoreapi.com'

export const instance = axios.create({
    baseURL
})