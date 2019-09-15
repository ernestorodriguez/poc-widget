import React from 'react';

class Icon extends React.Component {
    render() {
        const { icon} = this.props;

        return (
            <div className={'weather-widget-info__block weather-widget-info__block--icon'}>
                <img className={'weather-widget-info__block-image'} src={`/images/${icon}-icon.svg`} />
            </div>
        );
    }
}


export default Icon;
