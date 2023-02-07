/**
 * Class representing the forcast for a single day.
 */
export class ForecastDay{
    private maxTemp: number;
    private minTemp: number;
    private weather: string;
    private date: string;

    constructor(maxTemp: number, minTemp: number, weather: string, date: string) {
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.weather = weather;
        this.date = date;
    }

    /**
     * @returns A string with the day number of the month.
     */
    getDay(): string{
        return this.date.toString().substring(6);
    }

    getMaxTemp(): string{
        return this.maxTemp.toString();
    }

    getMinTemp(): string{
        return this.minTemp.toString();
    }

    getWeather(): string{
        return this.weather.toString();
    }
}