import axios from 'axios';

const restClient = axios.create({
    baseURL: 'https://samples.openweathermap.org/data/2.5/',
    timeout: 5000,
});

const URL = 'forecast/hourly?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22';

class WeatherService {
    static get() {
        return restClient.get(URL)
            .then((response) => response.data);
    }
}

export default WeatherService;