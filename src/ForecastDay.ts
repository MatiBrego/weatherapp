
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
     * Gathers all data and returns a way of displaying it in html code.
     * 
     * @returns A string with the html code.
     */
    display(): string {
        return "<div>"+ 
            this.getDay() + " " +
            this.maxTemp.toString() + " " +
            this.minTemp.toString() + " " +
            this.weather
        + "</div>";
    }

    /**
     * @returns A string with the day of the whole date.
     */
    getDay(): string{
        return this.date.toString().substring(6);
    }
}