import WheaterService from '../../../services/Weather.service';
import _ from 'underscore';

const notFound = (req, res) => {
    res.status(404);
    res.send('404');
};

const error = (err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.send('ups something wen wrong');
};

const normaliceDates = function(list) {
    return _.map(list, (item) => {
        item.dt_txt =  item.dt_txt.replace(/ /g,"T");
        return item;
    })
}

const getWeatherData = (req, res, next) => {
    WheaterService.get().then((data) => {
        res.locals.weatherData = data;
        res.locals.weatherData.list = normaliceDates(data.list)
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

