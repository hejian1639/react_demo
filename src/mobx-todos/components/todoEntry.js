import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import $ from 'jquery'

const ENTER_KEY = 13;

@observer
export default class TodoEntry extends React.Component {
	render() {
		return (<input
			ref="newField"
			className="new-todo"
			placeholder="What needs to be done?"
			onKeyDown={this.handleNewTodoKeyDown}
			autoFocus={true}
		/>);
	}

	handleNewTodoKeyDown = (event) => {
		if (event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();

		var val = $(this.refs.newField).val().trim();

		if (val) {
			this.props.todoStore.addTodo(val);
			$(this.refs.newField).val('');
		}
	};
}

TodoEntry.propTypes = {
	todoStore: React.PropTypes.object.isRequired
};
