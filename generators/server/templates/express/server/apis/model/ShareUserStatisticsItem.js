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
    define(['ApiClient', 'model/ShareUserStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShareUserStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.ShareUserStatisticsItem = factory(root.Mimir.ApiClient, root.Mimir.ShareUserStatistics);
  }
}(this, function(ApiClient, ShareUserStatistics) {
  'use strict';




  /**
   * The ShareUserStatisticsItem model module.
   * @module model/ShareUserStatisticsItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShareUserStatisticsItem</code>.
   * @alias module:model/ShareUserStatisticsItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ShareUserStatisticsItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareUserStatisticsItem} obj Optional instance to populate.
   * @return {module:model/ShareUserStatisticsItem} The populated <code>ShareUserStatisticsItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('current_user_statistics')) {
        obj['current_user_statistics'] = ShareUserStatistics.constructFromObject(data['current_user_statistics']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ShareUserStatistics} current_user_statistics
   */
  exports.prototype['current_user_statistics'] = undefined;



  return exports;
}));


