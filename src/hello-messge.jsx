import React, { Component } from 'react';
import { render } from 'react-dom';

define(function(require){


class HelloMessage extends Component {
    init(){
        // 加载组件到 DOM 元素 mountNode
        render(<HelloMessage name="John" />, document.getElementById('example'));
    }
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}


});
