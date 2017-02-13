
import { Link } from 'ReactRouter'
import React from 'react'
import style from './style.css'
import Header from 'header'


export default class ReactPage extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props)
        this.state = {
            degree: 0, hovered: false
        };
        this.timerId = null;
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.timerId = setInterval(function () {
            this.setState({ degree: this.state.degree + 1 });
        }.bind(this), 50);

    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    render() {
        console.log('render');
        var rotateStyle = {
            margin: '30px',
            width: '100px',
            height: '75px',
            backgroundColor: 'yellow',
            border: '1px solid black',
            borderRadius: '5px',
            textShadow: '1px 1px 1px #FF0000',
            transform: 'rotate(' + this.state.degree + 'deg)',
        };
        return (
            <div style={{ backgroundImage: 'url("' + require("../images/eg_bg_06.gif") + '")', padding: '10px' }}>
                <Header />
                <h1>Hello, React Page</h1>
                <div style={rotateStyle}>你好。这是一个 div 元素。</div>
                <div className={style.serif}>With CSS3, websites can finally use fonts other than the pre-selected "web-safe" fonts.</div>
                <Link to="/">Go back to Home</Link>
            </div>
        );
    }
}



