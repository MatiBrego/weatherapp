import { imgs } from "./ImageGetter.js";

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
        return "<div style='padding-left: 20px'>"+ 
            this.getDay() + " " +
            " Max:" + this.maxTemp.toString() + "° " +
            " Min:" + this.minTemp.toString() + "° " +
            '<img src=' + imgs.get(this.weather)+' alt='+this.weather+'>'
        + "</div>";
    }

    /**
     * @returns A string with the day of the whole date.
     */
    getDay(): string{
        return this.date.toString().substring(6);
    }
}