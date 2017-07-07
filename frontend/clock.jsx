import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    this.state = {
      date: new Date()
    };

    this.tick = this.tick.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  getDate() {
    let date = this.state.date;
    let day = date.getDate();
    let weekDay = this.days[date.getDay()];
    let month = this.months[date.getMonth()];
    let year = date.getFullYear();

    return `${weekDay} ${month} ${day} ${year}`;
  }

  getTime() {
    let date = this.state.date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}:${seconds} PDT`;
  }

  render() {
    return (
      <div className='lightsaber'>
        <div className='clock'>
          <ul>
            <li>Time:</li>
            <li>{ this.getTime() }</li>
          </ul>
          <ul>
            <li>Date:</li>
            <li>{ this.getDate() }</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Clock;
