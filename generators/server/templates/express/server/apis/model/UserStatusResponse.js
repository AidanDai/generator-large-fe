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
    root.Mimir.UserStatusResponse = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserStatusResponse model module.
   * @module model/UserStatusResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserStatusResponse</code>.
   * @alias module:model/UserStatusResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserStatusResponse} obj Optional instance to populate.
   * @return {module:model/UserStatusResponse} The populated <code>UserStatusResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('is_subscribed')) {
        obj['is_subscribed'] = ApiClient.convertToType(data['is_subscribed'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} is_subscribed
   * @default false
   */
  exports.prototype['is_subscribed'] = false;



  return exports;
}));

