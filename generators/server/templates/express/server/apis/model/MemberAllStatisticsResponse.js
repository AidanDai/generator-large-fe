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
    root.Mimir.MemberAllStatisticsResponse = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MemberAllStatisticsResponse model module.
   * @module model/MemberAllStatisticsResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberAllStatisticsResponse</code>.
   * @alias module:model/MemberAllStatisticsResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MemberAllStatisticsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberAllStatisticsResponse} obj Optional instance to populate.
   * @return {module:model/MemberAllStatisticsResponse} The populated <code>MemberAllStatisticsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interactive_member_scale')) {
        obj['interactive_member_scale'] = ApiClient.convertToType(data['interactive_member_scale'], 'Number');
      }
      if (data.hasOwnProperty('interactive_topic_scale')) {
        obj['interactive_topic_scale'] = ApiClient.convertToType(data['interactive_topic_scale'], 'Number');
      }
      if (data.hasOwnProperty('fans_growth_count')) {
        obj['fans_growth_count'] = ApiClient.convertToType(data['fans_growth_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} interactive_member_scale
   */
  exports.prototype['interactive_member_scale'] = undefined;
  /**
   * @member {Number} interactive_topic_scale
   */
  exports.prototype['interactive_topic_scale'] = undefined;
  /**
   * @member {Number} fans_growth_count
   */
  exports.prototype['fans_growth_count'] = undefined;



  return exports;
}));

