/**
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'

import {  } from '../actions'
import {  } from '../controllers'
import './stylesheets/index.css';

class <%= className %> extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div styleName="main">
        hello generator-large-fe!
      </div>
    );
  }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(<%= className %>)
