export class Geocoder{


    /** 
     * Searches the coordinates of a location, given its city and country.
     * 
     * @returns A promise in json format with the response
    */
    public search_by_address(cityInput: string, countryInput: string): Promise<JSON> {
        
        const url = 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?';
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '', //You should generate your own Rapid Api key for the geocoding api to run this WebApp.
                'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
            },
        };

        let params = new URLSearchParams({
            format: 'json',
            city: cityInput,
            country: countryInput,
            'accept-language': 'en',
            polygon_threshold: '0.0'
            })

        return fetch(url + params, options).then((response: any) => {return response.json()})
    }

}