import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'

export default class Animation extends React.Component {

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={500}
                    transitionEnter={false} transitionLeave={false}>

                    <h1>My Element...</h1>
                </ReactCSSTransitionGroup>
                <div style={{ background: 'red', width: '100px', height: '100px', animation: 'myfirst 5s' }}></div>
            </div>
        );
    }
}

