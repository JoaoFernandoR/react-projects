import axios from 'axios'


const api = axios.create({
    baseURL : 'https://course-api.com/react-tours-project'
})

export default api