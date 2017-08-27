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
    root.Mimir.UserRequest = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserRequest model module.
   * @module model/UserRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserRequest</code>.
   * @alias module:model/UserRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRequest} obj Optional instance to populate.
   * @return {module:model/UserRequest} The populated <code>UserRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} nickname
   * @default ''
   */
  exports.prototype['nickname'] = '';
  /**
   * @member {String} title
   * @default ''
   */
  exports.prototype['title'] = '';
  /**
   * @member {module:model/UserRequest.GenderEnum} gender
   */
  exports.prototype['gender'] = undefined;


  /**
   * Allowed values for the <code>gender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GenderEnum = {
    /**
     * value: "male"
     * @const
     */
    "male": "male",
    /**
     * value: "female"
     * @const
     */
    "female": "female",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };


  return exports;
}));

