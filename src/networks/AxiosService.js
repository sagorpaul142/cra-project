import axios from "axios";

const base_url = "https://fakestoreapi.com/";
let requestHeader = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Language': 'en',
}

async function get(url) {
    return axios.get(base_url + url, {
        headers: requestHeader
    })
}

async function post(url, body) {
    return axios.post(base_url + url, body, {
        headers: requestHeader
    });
}

async function put(url, body) {
    return axios.put(base_url + url, body, {
        headers: requestHeader
    });
}

const AxiosServices = {
    get,
    post,
    put
};
export default AxiosServices;