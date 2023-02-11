import React from "react";
import { ForecastDay } from "./ForecastDay";
import { ForecastDayComponent } from "./ForecastDayComponent";

/**
 * Given a list of ForecastDay objects, renders a ForecastDayComponent for each one.
 */
export class ForecastList extends React.Component<{list: ForecastDay[]}>{

    render(){
        return(
            <div className="row">{this.props.list.map((forecast: ForecastDay) => 
            <div className="col-sm pt-4">
            <ForecastDayComponent 
            forecastDay={forecast}/>
            </div>)}
            </div>
        )
    }


}