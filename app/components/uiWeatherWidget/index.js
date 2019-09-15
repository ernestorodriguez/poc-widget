import React from 'react';
import View from './view';

class UiWeatherWidget {
    constructor({ info, forecast, context }) {
        this.info = info;
        this.forecast = forecast;
        this.context = context;
    }
    render() {
        return (<View {...this}/>);
    }
}

export default UiWeatherWidget;
