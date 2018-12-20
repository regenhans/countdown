import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/countdownStyles.css';


export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
      countDownDate: this.props.countDownDate,
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      expired: true,
    };
  }

  toggleTimer = () => {
    const self = this;

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = this.props.countDownDate - now;
      self.setState({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });

      if (difference < 0) {
        self.setState({
          expired: true,
        });
      } else {
        self.setState({
          expired: false,
        });
      }
    }, 1000);
  };

  componentDidUpdate() {
    this.toggleTimer();
  }

  render() {
    const {
      days, hours, minutes, seconds, expired,
    } = this.state;
    return (
      <React.Fragment>
        {expired
          ? <p className="expired">Please enter Date and Time</p>
          : <div className="counter">
              <div className="dateTimeContainer">
                <p>{days}</p>
                <span>Days</span>
              </div>
              <div className="dateTimeContainer">
                <p>{hours}</p>
                <span>Hours</span>
              </div>
              <div className="dateTimeContainer">
                <p>{minutes}</p>
                <span>Minutes</span>
              </div>
              <div className="dateTimeContainer">
                <p>{seconds}</p>
                <span>Seconds</span>
              </div>
            </div>
        }

      </React.Fragment>
    );
  }
}
Countdown.propTypes = {
  countDownDate: PropTypes.instanceOf(Date),
};
