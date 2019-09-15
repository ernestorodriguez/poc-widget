
import React from 'react';
import View from  './view';
import WeatherWidget from '../../components/weatherWidget';

export default function controller(data) {
    const config = {
        weatherWidget: new WeatherWidget(data),
        model: data,
    };

    return  <View {...config}/>;
}
