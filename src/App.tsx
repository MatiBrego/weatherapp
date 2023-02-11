import React from 'react';
import './assets/App.css';
import { ForecastList } from './ForecastList';
import { ForecastDay } from './ForecastDay';
import { Weather } from './Weather';


export class App extends React.Component<{},{forecasts: ForecastDay[], city: string, country: string}>{
  private weather: Weather;

  constructor(props: {}){
    super(props)

    this.state = {forecasts:[], city: '', country: ''}
    this.weather = new Weather();

    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  render(){
    return (
        <div className='app'>
          <h1 className='header'>Weather 
              <small className="text-muted">  Forecast</small>
          </h1>
          <div>
              <form className='search'>
                  <div>
                  <label>City</label><br/>
                  <input type="text" name="location-city" id="location-city" onChange={this.handleCityChange}/>
                  </div>

                  <div className="second-box">
                    <label>Country</label><br/>
                    <input type="text" name="location-country" id="location-country" onChange={this.handleCountryChange}/>
                  </div>

                  <div className='button'>
                      <br/>
                    <button name="next-button" type="button" className="btn btn-light" onClick={this.handleClick}>Search</button>
                  </div>
              </form>
          </div>
          <br/>
          <ForecastList list={this.state.forecasts}/>
      </div>
    );
  }

  handleCityChange(e: any){
    this.setState({city: e.target.value})
  }

  handleCountryChange(e: any){
    this.setState({country: e.target.value})
  }

  /**
   * Gets the weather data using a Weather object using the input information. 
   * Then creates a list of ForecastDay objects and updates the state of the app with it.
   */
  handleClick(){
    let forecasts:Promise<JSON> = this.weather.weatherByAdress(this.state.city, this.state.country);

    let newForecasts: ForecastDay[] = [];

    forecasts.then((data: any) => {
        let i = 0;

        while(data["forecast"][i] !== undefined){
            let f = new ForecastDay(data['forecast'][i]["maxTemp"], 
                                    data['forecast'][i]["minTemp"], 
                                    data['forecast'][i]["symbol"],
                                    data['forecast'][i]["date"]);

            newForecasts.push(f);
            i += 1;
        }
        
        this.setState({forecasts: newForecasts})
      })
    }
  }

export default App;
