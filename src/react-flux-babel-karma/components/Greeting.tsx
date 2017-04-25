import React from 'react';
import GreetingState from '../types/GreetingState';
import {observer} from 'mobx-react';



@observer
class Greeting extends React.Component<{greetingState: GreetingState, targetOfGreeting: string}, any> {

  render() {
    return (
      <p>
        Hello { this.props.targetOfGreeting }!

        <button className="btn btn-default btn-danger"
                onClick={ this._onClick }>
                Remove
        </button>
      </p>
    );
  }

  _onClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.greetingState.removeGreeting(this.props.targetOfGreeting);
  }
}

export default Greeting;
