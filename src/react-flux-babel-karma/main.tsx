
import React from 'react';
import App from './components/App';
import GreetingState from './types/GreetingState';


const greetingState: GreetingState = new GreetingState();

const Greeter = () => (
    <App greetingState={greetingState} />
);

export default Greeter;
