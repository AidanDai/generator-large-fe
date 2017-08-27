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
    define(['ApiClient', 'model/SimpleUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.UserItem = factory(root.Mimir.ApiClient, root.Mimir.SimpleUser);
  }
}(this, function(ApiClient, SimpleUser) {
  'use strict';




  /**
   * The UserItem model module.
   * @module model/UserItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserItem</code>.
   * @alias module:model/UserItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserItem} obj Optional instance to populate.
   * @return {module:model/UserItem} The populated <code>UserItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUser.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SimpleUser} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


