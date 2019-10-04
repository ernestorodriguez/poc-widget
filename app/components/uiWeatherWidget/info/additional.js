import React from 'react';

class Additional extends React.Component {
    render() {
        const { city, day, date} = this.props;

        return (
            <div className={'weather-widget-info__block weather-widget-info__block--additional'}>
                <div className={'info-additional-header'}>
                    { city }
                </div>
                <time className={'info-additional-date'}>{ day }<br/>{ date }</time>
            </div>
        );
    }
}


export default Additional;
