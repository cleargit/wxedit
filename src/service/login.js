import axios from 'axios';
export function login(params) {
    axios.post('/dev/login', params)
    .then(function (response) {
        console.log(response);
     
    })
    .catch(function (error) {
    });
}
export function register(params){
    axios.post('/dev/register', params)
    .then(function (response) {
        console.log(response);
     
    })
    .catch(function (error) {
    });
}