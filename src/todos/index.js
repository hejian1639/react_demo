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
import * as FilterTypes from '../constants/TodoFilters'

var App = ({ dispatch, text, visibilityFilter }) => {


    return (
        <div>
            <AddTodo />
            <ul>
            {Object.keys(visibilityFilter).map(key => 
                (
                    <li key={key}>
                        <VisibleTodoList id={key} />
                        <Footer id={key} />
                    </li>
                )
            )}
            </ul>
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
    text: state.text,
    visibilityFilter: state.visibilityFilter
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


const todosProxy = (store, state, action) => {
    store.dispatch(action);
    return store.getState().todos;

}

function proxyFactory(store, id){
    const proxy = (state, action) => {
        store.dispatch(action);
        return store.getState()[id];

    }

    return proxy;
}

const visibilityFilter = (state = {'1': FilterTypes.SHOW_ACTIVE, '2': FilterTypes.SHOW_COMPLETED, '3': FilterTypes.SHOW_ALL}, action) => {
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
        const todos = proxyFactory(this.props.store, 'todos');
        const reducer = combineReducers({
            todos,
            visibilityFilter,
            text
        })
        this.store = createStore(reducer);
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
