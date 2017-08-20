import React, { Component } from 'react'
import { is } from 'immutable'

/**
 * ImmutableComponent, Smart Components muest extends ImmutableComponent
 *
 * @export
 * @class ImmutableComponent
 * @extends {Component}
 * @author Qiao.Wen qiao.wen@guokr.com
 */
export default class ImmutableComponent extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps = {}, nextState = {}) {
        const thisProps = this.props || {}
        const thisState = this.state || {}

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length
            || Object.keys(thisState).length !== Object.keys(nextState || {}).length) {
            return true
        }

        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                return true
            }
        }

        for (const key in nextState) {
            if (!is(thisState[key], nextState[key])) {
                return true
            }
        }

        return false
    }
}
