import React, { Component } from 'react'

/**
 * ImmutableHOC, DumbComponent must was warpped by ImmutableHOC
 *
 * @param DumbComponent
 * @return ImmutableHOC
 * @author Qiao.Wen qiao.wen@guokr.com
 */
export default (DumbComponent) => {
    class ImmutableHOC extends Component {
        constructor(props) {
            super(props)
        }

        toJS() {
            const DumbComponentProps = this.props
            const KEY = 0
            const VALUE = 1

            return Object.entries(DumbComponentProps)
                .reduce((JSProps, DumbComponentProp) => {
                    JSProps[DumbComponentProp[KEY]] = (typeof DumbComponentProp.toJS === 'function')
                        ? DumbComponentProp.toJS()
                        : DumbComponentProp

                    return JSProps
                }, {})
        }

        render() {
            const JSProps = this.toJS()

            return (
                <DumbComponent {...JSProps } />
            )
        }
    }

    return ImmutableHOC
}
