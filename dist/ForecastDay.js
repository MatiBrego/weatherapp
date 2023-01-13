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
    display() {
        return "<div>" +
            this.getDay() + " " +
            this.maxTemp.toString() + " " +
            this.minTemp.toString() + " " +
            this.weather
            + "</div>";
    }
    getDay() {
        return this.date.toString().substring(6);
    }
}
//# sourceMappingURL=ForecastDay.js.map