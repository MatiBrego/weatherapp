export class Geocoder {
    /**
     * Searches the coordinates of a location, given its city and country.
     *
     * @returns A promise in json format with the response
    */
    search_by_address(cityInput, countryInput) {
        const url = 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '',
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
    }
}
//# sourceMappingURL=Geocoder.js.map