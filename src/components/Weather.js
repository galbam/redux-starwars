import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getWeather } from "../action/getData";

class Weather extends Component {
     state = {
          time: new Date().toLocaleString()
     }

     componentDidMount() {
          this.props.getWeather();

          setInterval(() => {
               this.setState({
                    time: new Date().toLocaleString()
               });
          }, 1000);
     }

     render() {
          return (
               <div>
                    <h1>Weather Today {this.state.time}</h1>
                    <div className="Weather">
                         <div className="dataWrapper">
                              {!this.props.weatherData ? <h1>loading...</h1> :
                                   <div>
                                        <li>Humidity: {this.props.weatherData.humidity}</li>
                                        <li>Temp: {this.props.weatherData.temp}</li>
                                        <li>MIN: {this.props.weatherData.temp_min}</li>
                                        <li>MAX: {this.props.weatherData.temp_max}</li>
                                   </div>}
                         </div>
                    </div>
               </div>
          )
     }
}

const mapStateToProps = state => ({
     weatherData: state.weatherReducer.weather.main
});

export default connect(mapStateToProps, { getWeather })(Weather);