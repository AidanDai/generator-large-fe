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
    define(['ApiClient', 'model/AwardResponse', 'model/ReplyResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AwardResponse'), require('./ReplyResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.ShareExtraData = factory(root.Mimir.ApiClient, root.Mimir.AwardResponse, root.Mimir.ReplyResponse);
  }
}(this, function(ApiClient, AwardResponse, ReplyResponse) {
  'use strict';




  /**
   * The ShareExtraData model module.
   * @module model/ShareExtraData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShareExtraData</code>.
   * @alias module:model/ShareExtraData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ShareExtraData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareExtraData} obj Optional instance to populate.
   * @return {module:model/ShareExtraData} The populated <code>ShareExtraData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('awards')) {
        obj['awards'] = ApiClient.convertToType(data['awards'], [AwardResponse]);
      }
      if (data.hasOwnProperty('head_awards')) {
        obj['head_awards'] = ApiClient.convertToType(data['head_awards'], [AwardResponse]);
      }
      if (data.hasOwnProperty('replies')) {
        obj['replies'] = ApiClient.convertToType(data['replies'], [ReplyResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AwardResponse>} awards
   */
  exports.prototype['awards'] = undefined;
  /**
   * @member {Array.<module:model/AwardResponse>} head_awards
   */
  exports.prototype['head_awards'] = undefined;
  /**
   * @member {Array.<module:model/ReplyResponse>} replies
   */
  exports.prototype['replies'] = undefined;



  return exports;
}));

