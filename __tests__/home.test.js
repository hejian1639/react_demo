import Home from '../src/home';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import $ from 'jquery'
import request from 'ajax-request'

$.ajax = function(URL, param) {
    return new Promise(function(resolve, reject) {
        request({
            url: URL,
            method: 'GET',
        }, function(err, res, body) {
            resolve(JSON.parse(body))

        });
    });
}

test('Home test', () => {

    // var wrapper = TestUtils.renderIntoDocument(
    //   <Home />
    // );

    // var btns = TestUtils.scryRenderedComponentsWithType(wrapper, Button);
    // // console.log(btns);
    // // // var btn = TestUtils.findRenderedDOMComponentWithTag(wrapper.refs.refresh, 'button');
    // var btn = TestUtils.findRenderedDOMComponentWithTag(btns[1], 'button');
    // TestUtils.Simulate.click(btn);
    // return $.ajax('http://localhost:3001/service/home_list1', { dataType: "json" }) //.then((list) => console.log(list));
      const component = renderer.create(
       <Home />
      );
      return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve('Async Hello world');
                    }, 1000);
                }).then(()=>expect(component.toJSON()).toMatchSnapshot())
                .then(()=>component.getInstance().refresh())
                .then(()=>expect(component.toJSON()).toMatchSnapshot());
});
