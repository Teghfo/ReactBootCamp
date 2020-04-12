const axios = require('axios')

const fetchData = () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .catch(err => err)
}


module.exports = { fetchData }