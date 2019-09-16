import React from 'react';
import Hour from './hour';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.forecastContainerRef = React.createRef();
    }

    componentDidMount() { 
        TweenLite.to(this.forecastContainerRef.current, 2 , { opacity: 1, delay:1, scrollTo: {x:'.weather-widget__forecast-hour--active', offsetX: 200}});  
    }

    render() {
        const { list, context } = this.props;
        const hours = list.map((hour, index) => <Hour key={index} units={context.tempUnits} {...hour} />);

        return (
            <div ref={this.forecastContainerRef} className={'weather-widget__forecast'}>
                <ul className={'weather-widget__forecast-container'}>
                    {hours}
                </ul>
            </div>
        );
    }
}


export default Forecast;
