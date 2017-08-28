/*
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import React, { Component } from 'react'
<% if (redux) { %>
import { connect } from 'react-redux'
<% } %>
import PropTypes from 'prop-types'
import Perf from 'react-addons-perf'

import './stylesheets/index.css'

class Page extends Component {

    constructor(props) {
        super(props)
    }

    getChildContext() {
        return {
            app: {
                generator: 'generator-large-fe'
            }
        }
    }

    render() {
        return (
            <div styleName="main">
                <h1 styleName="title">Generator Large FE</h1>
                <p styleName="intor">this is a powerful generator for Front end engineer or Full Stack Developer of Guokr, that can be used to create and Large FE projects that use React(antd or antd-mobile), Redux, Immutable, Express.</p>
                <section>
                    <h2>1 Features</h2>
                    <h3 styleName="h3">1.1 FE Project</h3>
                    <ul styleName="h3">
                        <li>react</li>
                        <li>antd or antd-mobile(support <a href="https://github.com/amfe/lib-flexible" target="_blank">flexible</a> - you can see <a href="https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE" target="_blank">antd-mobile-0.8-以上版本「高清」方案设置</a> for more detail and <a href="https://github.com/ftlabs/fastclick" target="_blank">FastClick</a>, when you use antd-mobile)</li>
                        <li>redux</li>
                        <li>immutable</li>
                        <li>css module</li>
                        <li>postcss</li>
                        <li>less</li>
                    </ul>
                    <h3 styleName="h3">1.2 Front end Engineering</h3>
                    <ul styleName="h3">
                        <li>eslint</li>
                        <li>gitlab hooks of eslint</li>
                        <li>gulp</li>
                        <li>webpack</li>
                    </ul>
                    <h3 styleName="h3">1.3 Node Arch</h3>
                    <ul styleName="h3">
                        <li>express</li>
                    </ul>
                </section>
                <section>
                    <h2>2 Planned Features and updates</h2>
                    <ul>
                        <li>support express logs and tests firstly</li>
                        <li>support more Node Arch, example koa, egg and so on</li>
                    </ul>
                </section>
                <section>
                    <h2>3 Maintainer</h2>
                    <ul>
                        <li>AidanDai aidandai@126.com</li>
                    </ul>
                </section>
                <p styleName="repo">see <a target="_blank" href="https://github.com/AidanDai/generator-large-fe" alt="generator-large-fe">generator-large-fe repository</a> for more detail </p>
            </div>
        )
    }

}

Page.childContextTypes = {
    app: PropTypes.objectOf(PropTypes.string)
}

<% if (redux) { %>
function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Page)
<% } else { %>
export default Page
<% } %>
