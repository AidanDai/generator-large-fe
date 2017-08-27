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
    root.Mimir.ApplicationRequest = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationRequest model module.
   * @module model/ApplicationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ApplicationRequest</code>.
   * @alias module:model/ApplicationRequest
   * @class
   * @param uidLeader {String} 
   */
  var exports = function(uidLeader) {
    var _this = this;



    _this['uid_leader'] = uidLeader;









  };

  /**
   * Constructs a <code>ApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationRequest} obj Optional instance to populate.
   * @return {module:model/ApplicationRequest} The populated <code>ApplicationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('uid_leader')) {
        obj['uid_leader'] = ApiClient.convertToType(data['uid_leader'], 'String');
      }
      if (data.hasOwnProperty('leader_name')) {
        obj['leader_name'] = ApiClient.convertToType(data['leader_name'], 'String');
      }
      if (data.hasOwnProperty('leader_summary')) {
        obj['leader_summary'] = ApiClient.convertToType(data['leader_summary'], 'String');
      }
      if (data.hasOwnProperty('leader_phone')) {
        obj['leader_phone'] = ApiClient.convertToType(data['leader_phone'], 'String');
      }
      if (data.hasOwnProperty('leader_weixin')) {
        obj['leader_weixin'] = ApiClient.convertToType(data['leader_weixin'], 'String');
      }
      if (data.hasOwnProperty('other_info')) {
        obj['other_info'] = ApiClient.convertToType(data['other_info'], 'String');
      }
      if (data.hasOwnProperty('realm')) {
        obj['realm'] = ApiClient.convertToType(data['realm'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('welcome')) {
        obj['welcome'] = ApiClient.convertToType(data['welcome'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   * @default ''
   */
  exports.prototype['name'] = '';
  /**
   * @member {String} summary
   * @default ''
   */
  exports.prototype['summary'] = '';
  /**
   * @member {String} uid_leader
   * @default ''
   */
  exports.prototype['uid_leader'] = '';
  /**
   * @member {String} leader_name
   * @default ''
   */
  exports.prototype['leader_name'] = '';
  /**
   * @member {String} leader_summary
   * @default ''
   */
  exports.prototype['leader_summary'] = '';
  /**
   * @member {String} leader_phone
   * @default ''
   */
  exports.prototype['leader_phone'] = '';
  /**
   * @member {String} leader_weixin
   * @default ''
   */
  exports.prototype['leader_weixin'] = '';
  /**
   * @member {String} other_info
   * @default ''
   */
  exports.prototype['other_info'] = '';
  /**
   * @member {String} realm
   * @default ''
   */
  exports.prototype['realm'] = '';
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {String} welcome
   */
  exports.prototype['welcome'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));

