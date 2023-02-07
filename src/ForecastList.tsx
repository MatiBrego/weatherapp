import React from "react";
import { ForecastDay } from "./ForecastDay";
import { ForecastDayComponent } from "./ForecastDayComponent";

export class ForecastList extends React.Component<{list: ForecastDay[]}>{
    render(){
        return(
            <div className="row">{this.props.list.map((forecast: ForecastDay) => 
            <div className="col-sm pt-4">
            <ForecastDayComponent 
            date = {forecast.getDay()} 
            minTemp = {forecast.getMinTemp()} 
            maxTemp = {forecast.getMaxTemp()} 
            weather = {forecast.getWeather()}/>
            </div>)}
            </div>
        )
    }


}