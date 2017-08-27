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
            <div>
                <h1>Generator Large FE</h1>
                <p>this is a powerful generator for Front end engineer or Full Stack Developer of Guokr, that can be used to create and Large FE projects that use React(antd or antd-mobile), Redux, Immutable, Express.</p>
                <section>
                    <h2>Features</h2>
                    <h3>FE Project</h3>
                    <ul>
                        <li>react</li>
                        <li>antd or antd-mobile</li>
                        <li>redux</li>
                        <li>immutable</li>
                        <li>css module</li>
                        <li>postcss</li>
                        <li>less</li>
                    </ul>
                    <h3>Front end Engineering</h3>
                    <ul>
                        <li>eslint</li>
                        <li>gitlab hooks of eslint</li>
                        <li>gulp</li>
                        <li>webpack</li>
                    </ul>
                    <h3>Node Arch</h3>
                    <ul>
                        <li>express</li>
                    </ul>
                </section>
                <section>
                    <h2>Planned Features and updates</h2>
                    <ul>
                        <li>support express logs and tests firstly</li>
                        <li>support more Node Arch, example koa, egg and so on</li>
                    </ul>
                </section>
                <section>
                    <h2>Maintainer</h2>
                    <ul>
                        <li>文桥 qiao.wen@guokr.com</li>
                    </ul>
                </section>
                <p>see <a target="_blank" href="http://git.iguokr.com/wenqiao/generator-large-fe" alt="generator-large-fe">generator-large-fe repository</a> for generator-large-fe more detail </p>
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
