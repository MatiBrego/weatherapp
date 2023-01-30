import { imgs } from "./ImageGetter.js";
/**
 * Class representing the forcast for a single day.
 */
export class ForecastDay {
    maxTemp;
    minTemp;
    weather;
    date;
    constructor(maxTemp, minTemp, weather, date) {
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
    display() {
        return "<div style='padding-left: 20px'>" +
            this.getDay() + " " +
            "<b> Max:" + this.maxTemp.toString() + "° </b>" +
            " Min:" + this.minTemp.toString() + "° " +
            '<img src=' + imgs.get(this.weather) + ' alt=' + this.weather + '>'
            + "</div>";
    }
    /**
     * @returns A string with the day of the whole date.
     */
    getDay() {
        return this.date.toString().substring(6);
    }
}
//# sourceMappingURL=ForecastDay.js.map