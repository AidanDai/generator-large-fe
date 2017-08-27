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
    root.Mimir.UserStatistics = factory(root.Mimir.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserStatistics model module.
   * @module model/UserStatistics
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserStatistics</code>.
   * @alias module:model/UserStatistics
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>UserStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserStatistics} obj Optional instance to populate.
   * @return {module:model/UserStatistics} The populated <code>UserStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lead_count')) {
        obj['lead_count'] = ApiClient.convertToType(data['lead_count'], 'Number');
      }
      if (data.hasOwnProperty('member_count')) {
        obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
      }
      if (data.hasOwnProperty('left')) {
        obj['left'] = ApiClient.convertToType(data['left'], 'Number');
      }
      if (data.hasOwnProperty('income')) {
        obj['income'] = ApiClient.convertToType(data['income'], 'Number');
      }
      if (data.hasOwnProperty('income_left')) {
        obj['income_left'] = ApiClient.convertToType(data['income_left'], 'Number');
      }
      if (data.hasOwnProperty('money')) {
        obj['money'] = ApiClient.convertToType(data['money'], 'Number');
      }
      if (data.hasOwnProperty('money_left')) {
        obj['money_left'] = ApiClient.convertToType(data['money_left'], 'Number');
      }
      if (data.hasOwnProperty('payout')) {
        obj['payout'] = ApiClient.convertToType(data['payout'], 'Number');
      }
      if (data.hasOwnProperty('income_month')) {
        obj['income_month'] = ApiClient.convertToType(data['income_month'], 'Number');
      }
      if (data.hasOwnProperty('payout_month')) {
        obj['payout_month'] = ApiClient.convertToType(data['payout_month'], 'Number');
      }
      if (data.hasOwnProperty('money_month')) {
        obj['money_month'] = ApiClient.convertToType(data['money_month'], 'Number');
      }
      if (data.hasOwnProperty('coin')) {
        obj['coin'] = ApiClient.convertToType(data['coin'], 'Number');
      }
      if (data.hasOwnProperty('reply_count')) {
        obj['reply_count'] = ApiClient.convertToType(data['reply_count'], 'Number');
      }
      if (data.hasOwnProperty('login_days')) {
        obj['login_days'] = ApiClient.convertToType(data['login_days'], 'Number');
      }
      if (data.hasOwnProperty('seriate_login_days')) {
        obj['seriate_login_days'] = ApiClient.convertToType(data['seriate_login_days'], 'Number');
      }
      if (data.hasOwnProperty('guest_count')) {
        obj['guest_count'] = ApiClient.convertToType(data['guest_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} lead_count
   */
  exports.prototype['lead_count'] = undefined;
  /**
   * @member {Number} member_count
   */
  exports.prototype['member_count'] = undefined;
  /**
   * @member {Number} left
   */
  exports.prototype['left'] = undefined;
  /**
   * @member {Number} income
   */
  exports.prototype['income'] = undefined;
  /**
   * @member {Number} income_left
   */
  exports.prototype['income_left'] = undefined;
  /**
   * @member {Number} money
   */
  exports.prototype['money'] = undefined;
  /**
   * @member {Number} money_left
   */
  exports.prototype['money_left'] = undefined;
  /**
   * @member {Number} payout
   */
  exports.prototype['payout'] = undefined;
  /**
   * @member {Number} income_month
   */
  exports.prototype['income_month'] = undefined;
  /**
   * @member {Number} payout_month
   */
  exports.prototype['payout_month'] = undefined;
  /**
   * @member {Number} money_month
   */
  exports.prototype['money_month'] = undefined;
  /**
   * @member {Number} coin
   */
  exports.prototype['coin'] = undefined;
  /**
   * @member {Number} reply_count
   */
  exports.prototype['reply_count'] = undefined;
  /**
   * @member {Number} login_days
   */
  exports.prototype['login_days'] = undefined;
  /**
   * @member {Number} seriate_login_days
   */
  exports.prototype['seriate_login_days'] = undefined;
  /**
   * @member {Number} guest_count
   */
  exports.prototype['guest_count'] = undefined;



  return exports;
}));


