import axios from 'axios';

// Creates a dedicated axios client that is configured to make requests with whatever configuration we
// set it up.
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `AIzaSyC5vqyfR3ECWCQNW8BQksJeRAX1hYKUlXM`
    }
});