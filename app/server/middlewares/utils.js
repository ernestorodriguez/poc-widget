import WheaterService from '../../../services/Weather.service';

const notFound = (req, res) => {
    res.status(404);
    res.send('404');
};

const error = (err, req, res, next) => {
    console.log(err);
    res.status(500);
    res.send('ups something wen wrong');
};

const getWeatherData = (req, res, next) => {
    WheaterService.get().then((data) => {
        res.locals.weatherData = data;
        next();
    }).catch(error => {
        next(error);
    });
};

export {
    notFound,
    error,
    getWeatherData
};

