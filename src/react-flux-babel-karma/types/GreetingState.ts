import { observable, useStrict, action } from 'mobx';

useStrict(true);

class GreetingState {
  @observable greetings: string[];
  @observable newGreeting: string;

  constructor() {
    this.greetings = [];
    this.newGreeting = '';
  }

  @action
  newGreetingChanged(newGreeting: string): void {
    this.newGreeting = newGreeting;
  }

  @action
  addGreeting(newGreeting: string): void {
    this.greetings = this.greetings.concat(newGreeting);
    this.newGreeting = '';
  }

  @action
  removeGreeting(targetOfGreeting: string): void {
    this.greetings = this.greetings.filter(g => g !== targetOfGreeting);
  }

}

export default GreetingState;
