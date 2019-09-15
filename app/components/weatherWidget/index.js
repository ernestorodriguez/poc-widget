import React from 'react';
import View from './view';

class WeatherWidget {
    constructor({ info, forecast, context }) {
        this.info = info;
        this.forecast = forecast;
        this.context = context;
    }
    render() {
        return (<View {...this}/>);
    }
}

export default WeatherWidget;