import React from 'react';

class Additional extends React.Component {
    render() {
        const { city, day, date} = this.props;

        return (
            <div className={'weather-widget-info__additional'}>
                <div className={'weather-widget__info-temp-header'}>
                    <div>{ city }</div>
                </div>
                <div className={'weather-widget__info-temp-right-now'}>
                    <div>{ day }</div>
                    <div>{ date }</div>
                </div>
            </div>
        );
    }
}


export default Additional;
