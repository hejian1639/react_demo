import React from 'react';
import GreetingState from '../types/GreetingState';
import {observer} from 'mobx-react';


@observer
class WhoToGreet extends React.Component<{greetingState: GreetingState}, any> {

  render() {
    return (
        <form role="form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Who would you like to greet?"
                   value={ this.props.greetingState.newGreeting }
                   onChange={ this._handleNewGreetingChange } />
            <button type="submit" className="btn btn-default btn-primary"
                    onClick={ this._onSubmit }
                    disabled={ this._preventSubmission }>
                    Add greeting
            </button>
          </div>
        </form>
    );
  }

  get _preventSubmission() {
    return !this.props.greetingState.newGreeting;
  }

  _handleNewGreetingChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newGreeting = (event.target as HTMLInputElement).value;
    this.props.greetingState.newGreetingChanged(newGreeting);
  }

  _onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (this.props.greetingState.newGreeting != '') {
      this.props.greetingState.addGreeting(this.props.greetingState.newGreeting);
    }
  }
}

export default WhoToGreet;
