import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2ce1a3ad6744eb20722f63641e32fc04';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

    return data;
}