import React from "react";
import { ForecastDay } from "./ForecastDay";
import { imgs } from "./ImageGetter";

/**
 * Given a ForecastDay object, renders its information
 */
export class ForecastDayComponent extends React.Component<{forecastDay: ForecastDay}>{

    render(){
        return(
        <div> 
        {this.props.forecastDay.getDay()}
        <b> Max: {this.props.forecastDay.getMaxTemp()}° </b>
        Min: {this.props.forecastDay.getMinTemp()}°
        <img src={process.env.PUBLIC_URL + imgs.get(this.props.forecastDay.getWeather())} alt={this.props.forecastDay.getWeather()}/>
        </div>
        )
    }
}