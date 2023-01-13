import { Geocoder } from "./Geocoder.js";
export class Weather {
    geo = new Geocoder();
    /**
     * Searches the weather forecast for a location, based on its city name and country.
     *
     * @param cityInput
     * @param countryInput
     *
     * @returns Promise with Json file
     */
    weatherByAdress(cityInput, countryInput) {
        //Get the promise of the coordinates response object and run the makeRequest() function
        return this.geo.search_by_address(cityInput, countryInput).then(this.makeRequest);
    }
    makeRequest(coords) {
        let url = 'http://www.7timer.info/bin/civillight.php?';
        let params = new URLSearchParams({
            lon: coords[0]['lon'],
            lat: coords[0]['lat'],
            ac: '0',
            unit: 'metric',
            output: 'json',
            tzshift: '0'
        });
        return fetch(url += params).then((response) => { return response.json(); });
    }
}
// let weather = new Weather();
// function print(data:JSON){
//     let date:number = data['dataseries'][0]['date'].toString().substring(6);
//     console.log(date)
// }
// weather.weatherByAdress('London', 'UK').then(print)
//# sourceMappingURL=Weather.js.map