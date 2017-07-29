/**
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import {
  EXAMPLE_ACTION
} from '../constants'
import {  } from '../../../../..models'

export function example() {
    return (dispatch) => {
        dispatch({
            type: EXAMPLE_ACTION,
        })
    }
}
