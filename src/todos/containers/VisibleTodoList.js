import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import * as Actions from '../../actions'
import * as FilterTypes from '../../constants/TodoFilters'


const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => dispatch(Actions.toggleTodo(todo.id))}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.SHOW_ALL:
      return todos
    case FilterTypes.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case FilterTypes.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter[ownProps.id])
})


const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)

export default VisibleTodoList
