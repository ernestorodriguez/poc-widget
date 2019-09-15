import WeatherBlockCollection from './WeatherBlockCollection';
import DateHelpers from '../utils/DateHelpers';

class WeatherWidget {
    constructor({ data, units, time}) {
        this.city = data.city;
        this.time = time;
        this.collection = new WeatherBlockCollection( {
            list: data.list,
            units,
        });
    }

    generateContext() {
        return {
            tempUnits: '°',
        };
    }

    generateInfo() {
        const current = this.collection.getCurrent(this.time);
        const day = this.time.getDay();
        const month = this.time.getMonth();

        return {
            temp: current,
            additional: {
                city: this.city.name,
                day: DateHelpers.getDayName(day),
                date: `${day}. ${DateHelpers.getMonthName(month)}`,
            },
        };
    }

    generateUiModel() {
        return {
            info: this.generateInfo(),
            forecast: this.collection.getUiList(this.time),
            context: this.generateContext(),
        };
    }

    render() {
        return this.generateUiModel();
    }
}

export default WeatherWidget;
