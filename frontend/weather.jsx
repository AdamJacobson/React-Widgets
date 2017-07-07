import React from 'react';

class Weather extends React.Component{
  constructor() {
    super();

    this.state = {
      name: "",
      temp: ""
    };

    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getCoordinates() {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords: { latitude, longitude } } = position;
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=624f611073f994a7a0cbcf083262c53d`;

      var xhr;
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200){
          //4 === operation is complete, 0-unsent, 1-opened, 2-headers_received, 3-loading
          let weather = JSON.parse(xhr.response);
          this.setState({ name: weather.name, temp: weather.main.temp });
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      this.getCoordinates();
    } else {
      /* geolocation IS NOT available */
    }
  }

  render() {
    return (
      <div className="weather">
        <ul>
          <li>City Name</li>
          <li>{this.state.name}</li>
        </ul>
        <ul>
          <li>Temperature</li>
          <li>{this.state.temp}</li>
        </ul>
      </div>
    );
  }
}

export default Weather;
