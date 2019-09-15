import React from 'react';

class Hour extends React.Component {
    render() {
        const { hour, icon, temp, units, active } = this.props;

        return (
            <li className={`weather-widget__forecast-hour ${ active ? 'weather-widget__forecast-hour--active' : ''}`}>
                <div className={'weather-widget__forecast-hour-container'}>
                    <div className={'weather-widget__forecast-hour-hour'}>{hour}</div>
                    <div className={'weather-widget__forecast-hour-image-container'}>
                        <img className={'weather-widget__forecast-hour-image'} src={`/images/${icon}-icon.svg`} />
                    </div>
                    <div className={'weather-widget__forecast-hour-temp'}>{temp}{units}</div>
                </div>
            </li>
        );
    }
}


export default Hour;
