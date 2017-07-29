/**
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import {
    EXAMPLE_ACTION
} from '../constants'

/**
 * [example description]
 * @param  {[type]} payload [description]
 * {
 *     id [string],
 * }
 * @return {[type]}         [description]
 */
export function example(payload) {
  return {
    type: EXAMPLE_ACTION,
    payload
  }
}
