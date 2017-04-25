import React from 'react';

import GreetingState from '../types/GreetingState';
import WhoToGreet from './WhoToGreet';
import Greeting from './Greeting';
import {observer} from 'mobx-react';

@observer
class App extends React.Component<{greetingState: GreetingState}, {}> {

  render() {
    const { greetings } = this.props.greetingState;
    return (
      <div className="container-fluid">
        <h1>Hello People!</h1>

        <WhoToGreet greetingState={this.props.greetingState} />

        { greetings.map((g, index) => <Greeting key={ index } greetingState={this.props.greetingState} targetOfGreeting={ g } />) }
      </div>
    );
  }

}

export default App;
