import axios from 'axios';

const KEY = 'AIzaSyDORWUJRxAlC5gnPxQxk28BXJ9Dj450w8E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
    headers: {
        'Content-Type': "application/json; charset=UTF-8"
    }
});

