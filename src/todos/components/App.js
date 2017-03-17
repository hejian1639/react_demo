import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Button } from 'react-bootstrap';
import 'css!bootstrap'
import 'css!bootstrap-theme'
import { connect } from 'react-redux'

const setText = (text) => ({
    type: 'SET_TEXT',
    text
})

class App extends React.Component {

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                {this.props.text}
                <br />
                <br />
                <Button bsStyle="primary"
                    onClick={e => {
                        e.preventDefault();
                        this.props.dispatch(setText('hello'));
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

App = connect(mapStateToProps)(App)

export default App
