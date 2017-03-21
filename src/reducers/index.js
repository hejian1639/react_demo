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

const todos = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case types.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
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
