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
    root.Mimir.RightToViewShare = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RightToViewShare model module.
   * @module model/RightToViewShare
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RightToViewShare</code>.
   * @alias module:model/RightToViewShare
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RightToViewShare</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RightToViewShare} obj Optional instance to populate.
   * @return {module:model/RightToViewShare} The populated <code>RightToViewShare</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('can_see_detail')) {
        obj['can_see_detail'] = ApiClient.convertToType(data['can_see_detail'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} can_see_detail
   * @default false
   */
  exports.prototype['can_see_detail'] = false;



  return exports;
}));

