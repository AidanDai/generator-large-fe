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
    define(['ApiClient', 'model/SimpleGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.PrivilegeGroup = factory(root.Mimir.ApiClient, root.Mimir.SimpleGroup);
  }
}(this, function(ApiClient, SimpleGroup) {
  'use strict';




  /**
   * The PrivilegeGroup model module.
   * @module model/PrivilegeGroup
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PrivilegeGroup</code>.
   * @alias module:model/PrivilegeGroup
   * @class
   * @extends module:model/SimpleGroup
   */
  var exports = function() {
    var _this = this;
    SimpleGroup.call(_this);



  };

  /**
   * Constructs a <code>PrivilegeGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrivilegeGroup} obj Optional instance to populate.
   * @return {module:model/PrivilegeGroup} The populated <code>PrivilegeGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      SimpleGroup.constructFromObject(data, obj);
      if (data.hasOwnProperty('cur_user_is_up_guest')) {
        obj['cur_user_is_up_guest'] = ApiClient.convertToType(data['cur_user_is_up_guest'], 'Boolean');
      }
      if (data.hasOwnProperty('cur_member_is_prisoner')) {
        obj['cur_member_is_prisoner'] = ApiClient.convertToType(data['cur_member_is_prisoner'], 'Boolean');
      }
      if (data.hasOwnProperty('cur_user_free_read_left')) {
        obj['cur_user_free_read_left'] = ApiClient.convertToType(data['cur_user_free_read_left'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(SimpleGroup.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Boolean} cur_user_is_up_guest
   */
  exports.prototype['cur_user_is_up_guest'] = undefined;
  /**
   * @member {Boolean} cur_member_is_prisoner
   */
  exports.prototype['cur_member_is_prisoner'] = undefined;
  /**
   * @member {Number} cur_user_free_read_left
   */
  exports.prototype['cur_user_free_read_left'] = undefined;



  return exports;
}));


