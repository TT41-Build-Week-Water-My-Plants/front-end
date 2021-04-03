import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://plants-buildweek41.herokuapp.com',
        headers: {
            authorization: token
        }
    });
}