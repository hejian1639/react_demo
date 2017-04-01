import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { Button } from 'react-bootstrap';
import 'css!bootstrap'
import 'css!bootstrap-theme'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as types from '../constants/ActionTypes'

var App = ({ dispatch, text }) => {

    return (
        <div>
            <AddTodo />
            <VisibleTodoList id='1' />
            <Footer id='1' />
            <VisibleTodoList id='2' />
            <Footer id='2' />
            {text}
            <br />
            <br />
            <Button bsStyle="primary"
                onClick={e => {
                    e.preventDefault();
                    dispatch(Actions.setText('hello'));
                }}>
                refresh
            </Button>

        </div>
    )
}

const mapStateToProps = (state) => ({
    text: state.text
})

App = connect(mapStateToProps)(App)


class Todo {
    constructor(text) {
        this.id = Todo.nextTodoId++;
        this.text = text;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

Todo.nextTodoId = 0;


const todosProxy = (store, state = [], action) => {
    store.dispatch(action);
    return store.getState().todos;

}

const visibilityFilter = (state = {}, action) => {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            state[action.id] = action.filter;
            return { ...state };
        default:
            return state;
    }
}

const text = (state = 'no data', action) => {
    switch (action.type) {
        case types.SET_TEXT:
            return action.text
        default:
            return state
    }
}




class Todos extends React.Component {


    componentWillMount() {
        const todos = todosProxy.bind(null, this.props.store);
        const reducer = combineReducers({
            todos,
            visibilityFilter,
            text
        })
        this.store = createStore(reducer);
        this.store.dispatch(Actions.setVisibilityFilter('1', 'SHOW_ALL'));
        this.store.dispatch(Actions.setVisibilityFilter('2', 'SHOW_ALL'));
    }


    render() {
        return (
            <Provider store={this.store}>
                <App />

            </Provider>

        );
    }
}


export default Todos
