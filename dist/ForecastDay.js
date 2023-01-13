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
        return "<div>" +
            this.getDay() + " " +
            this.maxTemp.toString() + " " +
            this.minTemp.toString() + " " +
            this.weather
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