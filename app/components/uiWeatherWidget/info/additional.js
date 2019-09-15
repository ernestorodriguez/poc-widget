import React from 'react';

class Additional extends React.Component {
    render() {
        const { city, day, date} = this.props;

        return (
            <div className={'weather-widget-info__block weather-widget-info__block--additional'}>
                <div className={'info-additional-header'}>
                    { city }
                </div>
                <div className={'info-additional-date'}>
                    <div>{ day }</div>
                    <div>{ date }</div>
                </div>
            </div>
        );
    }
}


export default Additional;
