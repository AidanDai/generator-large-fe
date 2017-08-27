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
    define(['ApiClient', 'model/UserAvatar'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAvatar'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.UnreadNotificationCount = factory(root.Mimir.ApiClient, root.Mimir.UserAvatar);
  }
}(this, function(ApiClient, UserAvatar) {
  'use strict';




  /**
   * The UnreadNotificationCount model module.
   * @module model/UnreadNotificationCount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UnreadNotificationCount</code>.
   * @alias module:model/UnreadNotificationCount
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UnreadNotificationCount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnreadNotificationCount} obj Optional instance to populate.
   * @return {module:model/UnreadNotificationCount} The populated <code>UnreadNotificationCount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = UserAvatar.constructFromObject(data['avatar']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {module:model/UserAvatar} avatar
   */
  exports.prototype['avatar'] = undefined;



  return exports;
}));


