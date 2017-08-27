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
    define(['ApiClient', 'model/MemberResponse', 'model/OrderResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MemberResponse'), require('./OrderResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.SubscribeResponse = factory(root.Mimir.ApiClient, root.Mimir.MemberResponse, root.Mimir.OrderResponse);
  }
}(this, function(ApiClient, MemberResponse, OrderResponse) {
  'use strict';




  /**
   * The SubscribeResponse model module.
   * @module model/SubscribeResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SubscribeResponse</code>.
   * @alias module:model/SubscribeResponse
   * @class
   * @param groupId {Number} 
   * @param uidSubscriber {String} 
   * @param startAt {Date} 
   * @param endAt {Date} 
   */
  var exports = function(groupId, uidSubscriber, startAt, endAt) {
    var _this = this;



    _this['group_id'] = groupId;
    _this['uid_subscriber'] = uidSubscriber;





    _this['start_at'] = startAt;

    _this['end_at'] = endAt;



  };

  /**
   * Constructs a <code>SubscribeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscribeResponse} obj Optional instance to populate.
   * @return {module:model/SubscribeResponse} The populated <code>SubscribeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('uid_subscriber')) {
        obj['uid_subscriber'] = ApiClient.convertToType(data['uid_subscriber'], 'String');
      }
      if (data.hasOwnProperty('canceled_by')) {
        obj['canceled_by'] = ApiClient.convertToType(data['canceled_by'], 'Number');
      }
      if (data.hasOwnProperty('charge')) {
        obj['charge'] = ApiClient.convertToType(data['charge'], 'Number');
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], 'Number');
      }
      if (data.hasOwnProperty('left')) {
        obj['left'] = ApiClient.convertToType(data['left'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('start_at')) {
        obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
      }
      if (data.hasOwnProperty('pay_at')) {
        obj['pay_at'] = ApiClient.convertToType(data['pay_at'], 'Date');
      }
      if (data.hasOwnProperty('end_at')) {
        obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = OrderResponse.constructFromObject(data['order']);
      }
      if (data.hasOwnProperty('member')) {
        obj['member'] = MemberResponse.constructFromObject(data['member']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {String} uid_subscriber
   */
  exports.prototype['uid_subscriber'] = undefined;
  /**
   * @member {Number} canceled_by
   */
  exports.prototype['canceled_by'] = undefined;
  /**
   * @member {Number} charge
   */
  exports.prototype['charge'] = undefined;
  /**
   * @member {Number} days
   */
  exports.prototype['days'] = undefined;
  /**
   * @member {Number} left
   */
  exports.prototype['left'] = undefined;
  /**
   * @member {module:model/SubscribeResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} start_at
   */
  exports.prototype['start_at'] = undefined;
  /**
   * @member {Date} pay_at
   */
  exports.prototype['pay_at'] = undefined;
  /**
   * @member {Date} end_at
   */
  exports.prototype['end_at'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {module:model/OrderResponse} order
   */
  exports.prototype['order'] = undefined;
  /**
   * @member {module:model/MemberResponse} member
   */
  exports.prototype['member'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "pendding"
     * @const
     */
    "pendding": "pendding",
    /**
     * value: "listen"
     * @const
     */
    "listen": "listen",
    /**
     * value: "cancel"
     * @const
     */
    "cancel": "cancel",
    /**
     * value: "fail"
     * @const
     */
    "fail": "fail",
    /**
     * value: "end"
     * @const
     */
    "end": "end"  };


  return exports;
}));

