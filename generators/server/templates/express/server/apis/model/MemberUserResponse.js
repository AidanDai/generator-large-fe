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
    define(['ApiClient', 'model/MemberResponse', 'model/SimpleUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MemberResponse'), require('./SimpleUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.MemberUserResponse = factory(root.Mimir.ApiClient, root.Mimir.MemberResponse, root.Mimir.SimpleUser);
  }
}(this, function(ApiClient, MemberResponse, SimpleUser) {
  'use strict';




  /**
   * The MemberUserResponse model module.
   * @module model/MemberUserResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MemberUserResponse</code>.
   * @alias module:model/MemberUserResponse
   * @class
   * @extends module:model/MemberResponse
   */
  var exports = function() {
    var _this = this;
    MemberResponse.call(_this);

  };

  /**
   * Constructs a <code>MemberUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberUserResponse} obj Optional instance to populate.
   * @return {module:model/MemberUserResponse} The populated <code>MemberUserResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      MemberResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUser.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(MemberResponse.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/SimpleUser} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));

