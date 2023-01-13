import { Weather } from "./Weather.js";
import { ForecastDay } from "./ForecastDay.js";
let w = new Weather();
function display() {
    let forecasts = w.weatherByAdress(document.getElementById('location-city').value, document.getElementById('location-country').value);
    forecasts.then((data) => {
        let i = 0;
        document.getElementById("l").innerHTML = '';
        while (data["dataseries"][i] != undefined) {
            let f = new ForecastDay(data['dataseries'][i]["temp2m"]["max"], data['dataseries'][i]["temp2m"]["min"], data['dataseries'][i]["weather"], data['dataseries'][i]["date"]);
            document.getElementById("l").innerHTML += f.display();
            i += 1;
        }
    });
}
document.querySelector('button').addEventListener('click', display);
//# sourceMappingURL=index.js.map