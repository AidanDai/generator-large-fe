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
    root.Mimir.ShareReplyAwardedItem = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShareReplyAwardedItem model module.
   * @module model/ShareReplyAwardedItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShareReplyAwardedItem</code>.
   * @alias module:model/ShareReplyAwardedItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ShareReplyAwardedItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareReplyAwardedItem} obj Optional instance to populate.
   * @return {module:model/ShareReplyAwardedItem} The populated <code>ShareReplyAwardedItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('is_awarded_by_leader')) {
        obj['is_awarded_by_leader'] = ApiClient.convertToType(data['is_awarded_by_leader'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} is_awarded_by_leader
   */
  exports.prototype['is_awarded_by_leader'] = undefined;



  return exports;
}));

