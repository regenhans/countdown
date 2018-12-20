import React from 'react';
import CountDown from '../components/Countdown';
import Greetings from '../components/Greetings';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tomorrow: this.getTomorrowDate(new Date()),
      countDownDate: new Date(),
      validateDate: false,
    };
    this.datePicker = React.createRef();
  }

  getTomorrowDate = (date) => {
    const tomorrow = date;
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  }

  sendCountDown = (e) => {
    e.preventDefault();
    const datePicker = this.datePicker.current;
    if (datePicker.checkValidity) {
      this.setCountDownDate(datePicker.value);
    }
  };

  setCountDownDate = (date) => {
    const futureDate = new Date(date);
    this.setState({
      validateDate: true,
      countDownDate: futureDate,
    });
  };

  render() {
    const { tomorrow, validateDate, countDownDate } = this.state;
    return (
      <React.Fragment>
        <div className="countDownWrapper">
        <Greetings />
        <CountDown countDownDate={countDownDate} />
        <form onSubmit={this.sendCountDown}>
          <input
            required
            type="datetime-local"
            min={tomorrow.toISOString().split('.')[0]}
            ref={this.datePicker}
          />
          <br />
          <button type="submit" className='primary-button'>Set Timer</button>
          <br />
          {validateDate ? null : <p>Please enter a complete date and time</p>}
        </form>
        <br/>

        </div>

      </React.Fragment>
    );
  }
}
