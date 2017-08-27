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
    root.Mimir.UserWithdrawalData = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserWithdrawalData model module.
   * @module model/UserWithdrawalData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserWithdrawalData</code>.
   * @alias module:model/UserWithdrawalData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserWithdrawalData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserWithdrawalData} obj Optional instance to populate.
   * @return {module:model/UserWithdrawalData} The populated <code>UserWithdrawalData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('daily_withdrawal')) {
        obj['daily_withdrawal'] = ApiClient.convertToType(data['daily_withdrawal'], 'Number');
      }
      if (data.hasOwnProperty('daily_withdrawal_left')) {
        obj['daily_withdrawal_left'] = ApiClient.convertToType(data['daily_withdrawal_left'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} daily_withdrawal
   */
  exports.prototype['daily_withdrawal'] = undefined;
  /**
   * @member {Number} daily_withdrawal_left
   */
  exports.prototype['daily_withdrawal_left'] = undefined;



  return exports;
}));


