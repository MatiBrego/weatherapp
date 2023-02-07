import React from "react";
import { imgs } from "./ImageGetter";

export class ForecastDayComponent extends React.Component<{maxTemp: string, minTemp: string, weather: string, date: string}>{

    render(){
        return(
        <div> 
        {this.props.date} 
        <b> Max: {this.props.maxTemp}° </b>
        Min: {this.props.minTemp}°
        <img src={process.env.PUBLIC_URL + imgs.get(this.props.weather)} alt={this.props.weather}/>
        </div>
        )
    }
}