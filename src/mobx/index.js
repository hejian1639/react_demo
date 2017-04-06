import React from 'react'
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';
import TodoApp from './components/todoApp.js';
import 'css!todomvc-app-css'
import 'css!todomvc-common'

const initialState = window.initialState && JSON.parse(window.initialState) || {};

var todoStore = TodoStore.fromJS(initialState.todos || []);
var viewStore = new ViewStore();


export default class MobXTodo extends React.Component {

    render() {
        return (
            <TodoApp todoStore={todoStore} viewStore={viewStore} /> 
        );
    }
}

