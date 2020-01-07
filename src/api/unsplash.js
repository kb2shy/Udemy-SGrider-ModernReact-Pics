import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID 198483e4848df8d609266ec3821b37b9fc62ee0588b48128298630a23caaee19'
    }
})