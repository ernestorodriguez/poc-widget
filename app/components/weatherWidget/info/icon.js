import React from 'react';

class Icon extends React.Component {
    render() {
        const { icon} = this.props;
        return (
            <div className={'weather-widget-info__icon'}>
                <img src={`https://place-hold.it/150x150?text=${icon}`} />
            </div>
        );
    }
}


export default Icon;
