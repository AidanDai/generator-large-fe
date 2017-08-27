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
    root.Mimir.GroupCheckRequest = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GroupCheckRequest model module.
   * @module model/GroupCheckRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GroupCheckRequest</code>.
   * @alias module:model/GroupCheckRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>GroupCheckRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupCheckRequest} obj Optional instance to populate.
   * @return {module:model/GroupCheckRequest} The populated <code>GroupCheckRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('welcome')) {
        obj['welcome'] = ApiClient.convertToType(data['welcome'], 'String');
      }
      if (data.hasOwnProperty('leader_summary')) {
        obj['leader_summary'] = ApiClient.convertToType(data['leader_summary'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {String} welcome
   */
  exports.prototype['welcome'] = undefined;
  /**
   * @member {String} leader_summary
   */
  exports.prototype['leader_summary'] = undefined;
  /**
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;



  return exports;
}));

