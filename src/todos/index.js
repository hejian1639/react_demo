import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { Button } from 'react-bootstrap';
import 'css!bootstrap'
import 'css!bootstrap-theme'
import { connect } from 'react-redux'
import * as Actions from '../actions'



class Todos extends React.Component {
    componentWillMount() {
        const { text, dispatch } = this.props;
        dispatch(Actions.setVisibilityFilter('1', 'SHOW_ALL'));
        dispatch(Actions.setVisibilityFilter('2', 'SHOW_ALL'));
    }

    render() {
        const { text, dispatch } = this.props;
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
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text
})

Todos = connect(mapStateToProps)(Todos)

export default Todos
