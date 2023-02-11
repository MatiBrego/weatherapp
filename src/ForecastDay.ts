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
        return this.date.toString().substring(8);
    }

    /**
     * @returns A string with the max temp of the day.
     */
    getMaxTemp(): string{
        return this.maxTemp.toString();
    }

    /**
     * @returns A string with the min temp of the day.
     */
    getMinTemp(): string{
        return this.minTemp.toString();
    }

    /**
     * @returns A string with the symbol (Description) of the weather.
     */
    getWeather(): string{
        return this.weather.toString();
    }
}