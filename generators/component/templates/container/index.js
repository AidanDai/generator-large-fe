/*
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import { connect } from 'react-redux'
import <%= componentName %> from './components/<%= componentName %>'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(<%= componentName %>)
