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
    root.Mimir.SubscribeRequest = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubscribeRequest model module.
   * @module model/SubscribeRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SubscribeRequest</code>.
   * @alias module:model/SubscribeRequest
   * @class
   * @param groupId {Number} 
   * @param uidSubscriber {String} 
   * @param days {Number} 
   */
  var exports = function(groupId, uidSubscriber, days) {
    var _this = this;

    _this['group_id'] = groupId;
    _this['uid_subscriber'] = uidSubscriber;
    _this['days'] = days;


  };

  /**
   * Constructs a <code>SubscribeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscribeRequest} obj Optional instance to populate.
   * @return {module:model/SubscribeRequest} The populated <code>SubscribeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('uid_subscriber')) {
        obj['uid_subscriber'] = ApiClient.convertToType(data['uid_subscriber'], 'String');
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('subscribe_type')) {
        obj['subscribe_type'] = ApiClient.convertToType(data['subscribe_type'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {String} uid_subscriber
   */
  exports.prototype['uid_subscriber'] = undefined;
  /**
   * @member {Number} days
   */
  exports.prototype['days'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Number} subscribe_type
   */
  exports.prototype['subscribe_type'] = undefined;



  return exports;
}));

