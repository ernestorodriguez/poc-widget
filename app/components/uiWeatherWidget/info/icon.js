import React from 'react';

class Icon extends React.Component {
    render() {
        const { icon} = this.props;

        return (
            <figure className={'weather-widget-info__block weather-widget-info__block--icon'}>
                <img className={'weather-widget-info__block-image'} src={`/images/${icon}-icon.svg`} />
            </figure>
        );
    }
}


export default Icon;
