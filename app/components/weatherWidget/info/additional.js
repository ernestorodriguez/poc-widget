import React from 'react';

class Additional extends React.Component {
    render() {
        return (
            <div className={'weather-widget-info__additional'}>
                <div className={'weather-widget__info-temp-header'}>
                    <div>Munich</div>
                </div>
                <div className={'weather-widget__info-temp-right-now'}>
                    <div>Thursday</div>
                    <div>28. March</div>
                </div>
            </div>
        );
    }
}


export default Additional;
