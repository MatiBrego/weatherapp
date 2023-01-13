import { Geocoder } from "./Geocoder.js";

export class Weather {

    geo = new Geocoder();

    /**
     * Searches the weather forecast for a location, based on its city name and country.
     * 
     * @param cityInput 
     * @param countryInput 
     * 
     * @returns Promise with a list of Json files containing forecast information
     */

    public weatherByAdress(cityInput: string, countryInput: string): Promise<JSON>{

        //Get the promise of the coordinates response object and run the makeRequest() function
        return this.geo.search_by_address(cityInput, countryInput).then(this.makeRequest)
    }

    /**
     * Calls the weather api to get forecasts for the next few days
     * 
     * @param coords are the coordinates obtained by the Geocoder, passed as a promise
     * 
     * @returns Promise with a list of Json files containing forecast information
     */
    private makeRequest(coords: JSON): Promise<JSON>{

        let url = 'http://www.7timer.info/bin/civillight.php?';


        let params = new URLSearchParams({
            lon : coords[0]['lon'],
			lat: coords[0]['lat'],
			ac: '0',
			unit: 'metric',
			output: 'json',
			tzshift: '0'
            })

        return fetch(url += params).then((response: any) => {return response.json()})
    }
}

