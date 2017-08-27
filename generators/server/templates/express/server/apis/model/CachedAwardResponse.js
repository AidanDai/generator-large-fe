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
    root.Mimir.CachedAwardResponse = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CachedAwardResponse model module.
   * @module model/CachedAwardResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CachedAwardResponse</code>.
   * @alias module:model/CachedAwardResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CachedAwardResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CachedAwardResponse} obj Optional instance to populate.
   * @return {module:model/CachedAwardResponse} The populated <code>CachedAwardResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('ranking')) {
        obj['ranking'] = ApiClient.convertToType(data['ranking'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;
  /**
   * @member {module:model/CachedAwardResponse.RankingEnum} ranking
   */
  exports.prototype['ranking'] = undefined;


  /**
   * Allowed values for the <code>ranking</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RankingEnum = {
    /**
     * value: "gold"
     * @const
     */
    "gold": "gold",
    /**
     * value: "silver"
     * @const
     */
    "silver": "silver",
    /**
     * value: "bronze"
     * @const
     */
    "bronze": "bronze",
    /**
     * value: "none"
     * @const
     */
    "none": "none"  };


  return exports;
}));

