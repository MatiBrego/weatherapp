import { Geocoder } from "./Geocoder";

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
    private makeRequest(coords: any): Promise<JSON>{

        let url = 'https://foreca-weather.p.rapidapi.com/forecast/daily/';

        let lonlat: String =  coords[0]['lon']+','+ coords[0]['lat'];

        let params = new URLSearchParams({
			tempunit: 'C',
			periods: '7',
			dataset: 'standard'
            })

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '699ecb4593msh578b4fad7d5064ap17d66fjsn489a476f78b8',
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
            }
            };

        return fetch(url + lonlat +'?' + params, options).then((response: any) => {return response.json()})
    }
}

