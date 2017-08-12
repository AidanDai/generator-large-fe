/*
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import React, { Component } from 'react';
import { is } from 'immutable';

import './stylesheets/index.css';

export default class <%= componentName %> extends Component {

    constroctor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps = {}, nextState = {}) {
      const thisProps = this.props || {};
      const thisState = this.state || {};

      if (Object.keys(thisProps).length !== Object.keys(nextProps).length
            || Object.keys(thisState).length !== Object.keys(nextState).length) {
        return true;
      }

      for (const key in nextProps) {
        if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
          return true;
        }
      }

      for (const key in nextState) {
        if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
          return true;
        }
      }

      return false;
    }


  render() {
    return (
      <div></div>
    );
  }
}
