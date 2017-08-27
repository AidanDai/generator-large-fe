/**
 * Mimir
 * APIs
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.OrderResponse = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderResponse model module.
   * @module model/OrderResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderResponse</code>.
   * @alias module:model/OrderResponse
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>OrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderResponse} obj Optional instance to populate.
   * @return {module:model/OrderResponse} The populated <code>OrderResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('uid_owner')) {
        obj['uid_owner'] = ApiClient.convertToType(data['uid_owner'], 'String');
      }
      if (data.hasOwnProperty('charge')) {
        obj['charge'] = ApiClient.convertToType(data['charge'], 'Number');
      }
      if (data.hasOwnProperty('flow')) {
        obj['flow'] = ApiClient.convertToType(data['flow'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('modified_at')) {
        obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} uid_owner
   */
  exports.prototype['uid_owner'] = undefined;
  /**
   * @member {Number} charge
   */
  exports.prototype['charge'] = undefined;
  /**
   * @member {module:model/OrderResponse.FlowEnum} flow
   */
  exports.prototype['flow'] = undefined;
  /**
   * @member {module:model/OrderResponse.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * @member {String} message
   * @default ''
   */
  exports.prototype['message'] = '';
  /**
   * @member {module:model/OrderResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} client
   * @default ''
   */
  exports.prototype['client'] = '';
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} modified_at
   */
  exports.prototype['modified_at'] = undefined;


  /**
   * Allowed values for the <code>flow</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FlowEnum = {
    /**
     * value: "in"
     * @const
     */
    "in": "in",
    /**
     * value: "out"
     * @const
     */
    "out": "out"  };

  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "subscribe"
     * @const
     */
    "subscribe": "subscribe",
    /**
     * value: "refund"
     * @const
     */
    "refund": "refund",
    /**
     * value: "push"
     * @const
     */
    "push": "push",
    /**
     * value: "pop"
     * @const
     */
    "pop": "pop",
    /**
     * value: "award"
     * @const
     */
    "award": "award",
    /**
     * value: "counter"
     * @const
     */
    "counter": "counter",
    /**
     * value: "share"
     * @const
     */
    "share": "share",
    /**
     * value: "refund_1444"
     * @const
     */
    "refund_1444": "refund_1444"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "start"
     * @const
     */
    "start": "start",
    /**
     * value: "paying"
     * @const
     */
    "paying": "paying",
    /**
     * value: "fail"
     * @const
     */
    "fail": "fail",
    /**
     * value: "finish"
     * @const
     */
    "finish": "finish"  };


  return exports;
}));


