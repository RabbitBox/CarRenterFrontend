import axios from "../customAxios";
import qs from 'qs';


const authenticationService = {

    signInUser: (credentials) => {
        return axios.post("api/auth/signin",credentials);
    },

    logout: () => {
        localStorage.removeItem("user");
    },

    register: (data) => {
        return axios.post("/api/auth/" + "signup", data);
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },

    addRenter: (term) => {

        const formParams = qs.stringify(term);
        return axios.post("/renters",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },
};

export default authenticationService;