import React from 'react';

import GreetingState from '../types/GreetingState';
import WhoToGreet from './WhoToGreet';
import Greeting from './Greeting';
import { observer } from 'mobx-react';
import cssAPI from 'css-require'

@observer
class App extends React.Component<{ greetingState: GreetingState }, {}> {
    bootstrap: any;
    bootstrapTheme: any;

    componentWillMount() {
        console.log('componentWillMount');
        this.bootstrap = cssAPI.load('lib/bootstrap');
        this.bootstrapTheme = cssAPI.load('lib/bootstrap-theme');
    }

    componentWillUnmount() {
        // bootstrap();
        // bootstrapTheme();
        cssAPI.unload(this.bootstrap);
        cssAPI.unload(this.bootstrapTheme);
        console.log('componentWillUnmount');
    }

    render() {
        const { greetings } = this.props.greetingState;
        return (
            <div className="container-fluid">
                <h1>Hello People!</h1>

                <WhoToGreet greetingState={this.props.greetingState} />

                {greetings.map((g, index) => <Greeting key={index} greetingState={this.props.greetingState} targetOfGreeting={g} />)}
            </div>
        );
    }

}

export default App;
