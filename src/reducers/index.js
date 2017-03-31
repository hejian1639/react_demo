import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

let nextTodoId = 0

const todo = (state, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                id: nextTodoId++,
                text: action.text,
                completed: false
            }
        case types.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

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


const todos = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                new Todo(action.text)
            ]
        case types.TOGGLE_TODO:
            return state.map(t => {
                if (action.id == t.id) {
                    t.toggle();
                }
                return t;
            }
            )
        default:
            return state
    }
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


const todoApp = combineReducers({
    todos,
    visibilityFilter,
    text
})

export default todoApp
