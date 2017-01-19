$(function(){
    ReactDOM.render(<h1>Hello, world!</h1>,$('#example')[0]);
});

$(function(){
    var names = ['Alice', 'Emily', 'Kate'];

    ReactDOM.render(
    <div>
    {
      React.Children.map(names, function (name) {
        return <div>Hello, {name}!</div>
      })
    }
    </div>,
    $('#example1')[0]
    );
});

$(function(){
      ReactDOM.render(
        <div>
            <h1>Hello world!</h1>
            <h2>React is awesome</h2>
        </div>,
        document.getElementById('example2')
      );
});

$(function(){
      var HelloMessage = React.createClass({
        render: function() {
          return <h1>Hello {this.props.name}</h1>;
        }
      });

      ReactDOM.render(
        <HelloMessage name="John" />,
        document.getElementById('example3')
      );
      ReactDOM.render(
        <HelloMessage name="Jason" />,
        document.getElementById('example4')
      );
});

import React, { Component } from 'react';
import { render } from 'react-dom';

$(function(){
    class HelloMessage extends Component {
        render() {
            return <div>Hello {this.props.name}</div>;
        }
    }
    // 加载组件到 DOM 元素 mountNode
    render(<HelloMessage name="John" />, document.getElementById('example4'));

});

define(function(require){
 
  var React = require('react');
 
  function App() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Hello, React!</p>
          </div>
        );
      }
    });
  }
 
  App.prototype.init = function () {
    React.render(<this.AppView />, document.body);
  };
 
  return App;
 
});