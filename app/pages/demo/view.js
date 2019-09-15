import React from 'react';
import WeatherWidgetView from '../../components/weatherWidget/view';

class View extends React.Component {
    render() {
        return (
            <div className={'demo-page'}>
                <WeatherWidgetView/>
            </div>
        );
    }
}

export default View;
