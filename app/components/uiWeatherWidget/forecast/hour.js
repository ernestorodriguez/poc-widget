import React from 'react';

class Hour extends React.Component {
    render() {
        const { hour, icon, temp, units, active } = this.props;

        return (
            <li className={`weather-widget__forecast-hour ${ active ? 'weather-widget__forecast-hour--active' : ''}`}>
                <time className={'weather-widget__forecast-hour-hour'}>{hour}</time>
                <figure className={'weather-widget__forecast-hour-image-container'}>
                    <img className={'weather-widget__forecast-hour-image'} src={`/images/${icon}-icon.svg`} />
                </figure>
                <div className={'weather-widget__forecast-hour-temp'}>{temp}{units}</div>
            </li>
        );
    }
}


export default Hour;
