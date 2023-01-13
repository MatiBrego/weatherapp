export class Geocoder {
    /**
     * Searches the coordinates of a location, given its city and country.
     *
     * @returns A promise with the response
    */
    search_by_address(cityInput, countryInput) {
        const url = 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '699ecb4593msh578b4fad7d5064ap17d66fjsn489a476f78b8',
                'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
            },
        };
        let params = new URLSearchParams({
            format: 'json',
            city: cityInput,
            country: countryInput,
            'accept-language': 'en',
            polygon_threshold: '0.0'
        });
        return fetch(url + params, options).then((response) => { return response.json(); });
        // return axios.request(options).then((response: any) => {return response.data[0]})
    }
}
// let s = new Geocoder();
// s.search_by_address('London', 'UK').then((response: JSON) => {console.log(response[0])})
//# sourceMappingURL=Geocoder.js.map