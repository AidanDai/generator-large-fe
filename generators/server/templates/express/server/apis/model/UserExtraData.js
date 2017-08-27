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
    define(['ApiClient', 'model/UserAvatar', 'model/UserStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAvatar'), require('./UserStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.UserExtraData = factory(root.Mimir.ApiClient, root.Mimir.UserAvatar, root.Mimir.UserStatistics);
  }
}(this, function(ApiClient, UserAvatar, UserStatistics) {
  'use strict';




  /**
   * The UserExtraData model module.
   * @module model/UserExtraData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserExtraData</code>.
   * @alias module:model/UserExtraData
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>UserExtraData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserExtraData} obj Optional instance to populate.
   * @return {module:model/UserExtraData} The populated <code>UserExtraData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('avatar_key')) {
        obj['avatar_key'] = ApiClient.convertToType(data['avatar_key'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = UserAvatar.constructFromObject(data['avatar']);
      }
      if (data.hasOwnProperty('is_leader')) {
        obj['is_leader'] = ApiClient.convertToType(data['is_leader'], 'Boolean');
      }
      if (data.hasOwnProperty('is_guest')) {
        obj['is_guest'] = ApiClient.convertToType(data['is_guest'], 'Boolean');
      }
      if (data.hasOwnProperty('weixin_id')) {
        obj['weixin_id'] = ApiClient.convertToType(data['weixin_id'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('hide')) {
        obj['hide'] = ApiClient.convertToType(data['hide'], 'Boolean');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('is_prisoner')) {
        obj['is_prisoner'] = ApiClient.convertToType(data['is_prisoner'], 'Boolean');
      }
      if (data.hasOwnProperty('can_publish_video')) {
        obj['can_publish_video'] = ApiClient.convertToType(data['can_publish_video'], 'Boolean');
      }
      if (data.hasOwnProperty('is_checking')) {
        obj['is_checking'] = ApiClient.convertToType(data['is_checking'], 'Boolean');
      }
      if (data.hasOwnProperty('is_in_whitelist')) {
        obj['is_in_whitelist'] = ApiClient.convertToType(data['is_in_whitelist'], 'Boolean');
      }
      if (data.hasOwnProperty('can_create_group')) {
        obj['can_create_group'] = ApiClient.convertToType(data['can_create_group'], 'Boolean');
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = UserStatistics.constructFromObject(data['statistics']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UserResponse.GenderEnum} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * @member {String} avatar_key
   * @default ''
   */
  exports.prototype['avatar_key'] = '';
  /**
   * @member {module:model/UserAvatar} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * @member {Boolean} is_leader
   */
  exports.prototype['is_leader'] = undefined;
  /**
   * @member {Boolean} is_guest
   */
  exports.prototype['is_guest'] = undefined;
  /**
   * @member {String} weixin_id
   * @default ''
   */
  exports.prototype['weixin_id'] = '';
  /**
   * @member {String} phone
   * @default ''
   */
  exports.prototype['phone'] = '';
  /**
   * @member {Boolean} hide
   */
  exports.prototype['hide'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Boolean} is_prisoner
   */
  exports.prototype['is_prisoner'] = undefined;
  /**
   * @member {Boolean} can_publish_video
   */
  exports.prototype['can_publish_video'] = undefined;
  /**
   * @member {Boolean} is_checking
   * @default false
   */
  exports.prototype['is_checking'] = false;
  /**
   * @member {Boolean} is_in_whitelist
   * @default false
   */
  exports.prototype['is_in_whitelist'] = false;
  /**
   * @member {Boolean} can_create_group
   */
  exports.prototype['can_create_group'] = undefined;
  /**
   * @member {module:model/UserStatistics} statistics
   */
  exports.prototype['statistics'] = undefined;


  /**
   * Allowed values for the <code>gender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GenderEnum = {
    /**
     * value: "male"
     * @const
     */
    "male": "male",
    /**
     * value: "female"
     * @const
     */
    "female": "female",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };


  return exports;
}));


