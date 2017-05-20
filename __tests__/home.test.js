import Home from '../src/home';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


test('Home test', () => {

  // var wrapper = TestUtils.renderIntoDocument(
  //   <Home />
  // );

  // var btns = TestUtils.scryRenderedComponentsWithType(wrapper, Button);
  // // console.log(btns);
  // // // var btn = TestUtils.findRenderedDOMComponentWithTag(wrapper.refs.refresh, 'button');
  // var btn = TestUtils.findRenderedDOMComponentWithTag(btns[1], 'button');
  // TestUtils.Simulate.click(btn);

  const component = renderer.create(
   <Home />
  );
  return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('Async Hello world');
                }, 10);
            }).then(()=>expect(component.toJSON()).toMatchSnapshot())
            .then(()=>component.getInstance().refresh())
            .then(()=>expect(component.toJSON()).toMatchSnapshot());
});

