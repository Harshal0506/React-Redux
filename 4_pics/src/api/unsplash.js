import axios from 'axios';

// Creates a dedicated axios client that is configured to make requests with whatever configuration we
// set it up.
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID JaA5zbuvBnK8WTZyZhS4rGSSOpvWElyXsLmC8UHJ-Cw`
    }
});
