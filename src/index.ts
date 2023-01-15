import { Weather } from "./Weather.js";
import { ForecastDay } from "./ForecastDay.js";

let w = new Weather();

function display(){

    let forecasts:Promise<JSON> = w.weatherByAdress(document.getElementById('location-city').value, document.getElementById('location-country').value);

    forecasts.then((data: JSON) => {
        let i = 0;
        document.getElementById("list").innerHTML = '';
        while(data["dataseries"][i] != undefined){
            let f = new ForecastDay(data['dataseries'][i]["temp2m"]["max"], 
                                    data['dataseries'][i]["temp2m"]["min"], 
                                    data['dataseries'][i]["weather"],
                                    data['dataseries'][i]["date"]);
            document.getElementById("list").innerHTML += f.display();
            i += 1;
        }
    })

}
document.querySelector('button').addEventListener('click', display);