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
    root.Mimir.InviteCodeResponse = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InviteCodeResponse model module.
   * @module model/InviteCodeResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InviteCodeResponse</code>.
   * @alias module:model/InviteCodeResponse
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>InviteCodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InviteCodeResponse} obj Optional instance to populate.
   * @return {module:model/InviteCodeResponse} The populated <code>InviteCodeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uid_creator')) {
        obj['uid_creator'] = ApiClient.convertToType(data['uid_creator'], 'String');
      }
      if (data.hasOwnProperty('uid_consumer')) {
        obj['uid_consumer'] = ApiClient.convertToType(data['uid_consumer'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('times')) {
        obj['times'] = ApiClient.convertToType(data['times'], 'Number');
      }
      if (data.hasOwnProperty('left')) {
        obj['left'] = ApiClient.convertToType(data['left'], 'Number');
      }
      if (data.hasOwnProperty('expire')) {
        obj['expire'] = ApiClient.convertToType(data['expire'], 'Number');
      }
      if (data.hasOwnProperty('expired')) {
        obj['expired'] = ApiClient.convertToType(data['expired'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} uid_creator
   */
  exports.prototype['uid_creator'] = undefined;
  /**
   * @member {String} uid_consumer
   */
  exports.prototype['uid_consumer'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {Number} days
   */
  exports.prototype['days'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} times
   */
  exports.prototype['times'] = undefined;
  /**
   * @member {Number} left
   */
  exports.prototype['left'] = undefined;
  /**
   * @member {Number} expire
   */
  exports.prototype['expire'] = undefined;
  /**
   * @member {Number} expired
   */
  exports.prototype['expired'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;



  return exports;
}));

