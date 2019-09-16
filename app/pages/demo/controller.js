
import React from 'react';
import View from  './view';
import UiWeatherWidget from '../../components/uiWeatherWidget';
import WeatherWidget from '../../../lib/weatherWidget/index';
import CelsiusUnit from '../../../lib/weatherWidget/celsiusUnit';

export default function controller(data) {

    const weather = new WeatherWidget({
        units: new CelsiusUnit(),
        data: data,
        time: new Date('2019-03-28T07:00:00'),
    });

    const config = {
        weatherWidget: new UiWeatherWidget(weather.render()),
        model: data,
    };

    return  <View {...config}/>;
}
