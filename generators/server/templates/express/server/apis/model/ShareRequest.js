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
    define(['ApiClient', 'model/RichShareContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RichShareContent'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.ShareRequest = factory(root.Mimir.ApiClient, root.Mimir.RichShareContent);
  }
}(this, function(ApiClient, RichShareContent) {
  'use strict';




  /**
   * The ShareRequest model module.
   * @module model/ShareRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShareRequest</code>.
   * @alias module:model/ShareRequest
   * @class
   * @param uidAuthor {String} 
   * @param groupId {Number} 
   * @param contentType {module:model/ShareRequest.ContentTypeEnum} 
   * @param shareType {module:model/ShareRequest.ShareTypeEnum} 
   */
  var exports = function(uidAuthor, groupId, contentType, shareType) {
    var _this = this;


    _this['uid_author'] = uidAuthor;
    _this['group_id'] = groupId;
    _this['content_type'] = contentType;
    _this['share_type'] = shareType;








  };

  /**
   * Constructs a <code>ShareRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareRequest} obj Optional instance to populate.
   * @return {module:model/ShareRequest} The populated <code>ShareRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('uid_author')) {
        obj['uid_author'] = ApiClient.convertToType(data['uid_author'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
      if (data.hasOwnProperty('share_type')) {
        obj['share_type'] = ApiClient.convertToType(data['share_type'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('reply_reference')) {
        obj['reply_reference'] = ApiClient.convertToType(data['reply_reference'], 'String');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RichShareContent]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('related_id')) {
        obj['related_id'] = ApiClient.convertToType(data['related_id'], 'Number');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
      }
      if (data.hasOwnProperty('question_id')) {
        obj['question_id'] = ApiClient.convertToType(data['question_id'], 'Number');
      }
      if (data.hasOwnProperty('answer_not_notify_all')) {
        obj['answer_not_notify_all'] = ApiClient.convertToType(data['answer_not_notify_all'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} title
   * @default ''
   */
  exports.prototype['title'] = '';
  /**
   * @member {String} uid_author
   */
  exports.prototype['uid_author'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {module:model/ShareRequest.ContentTypeEnum} content_type
   */
  exports.prototype['content_type'] = undefined;
  /**
   * @member {module:model/ShareRequest.ShareTypeEnum} share_type
   */
  exports.prototype['share_type'] = undefined;
  /**
   * @member {String} text
   * @default ''
   */
  exports.prototype['text'] = '';
  /**
   * @member {String} reply_reference
   * @default ''
   */
  exports.prototype['reply_reference'] = '';
  /**
   * @member {Array.<module:model/RichShareContent>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {Number} related_id
   */
  exports.prototype['related_id'] = undefined;
  /**
   * @member {Number} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * @member {Number} question_id
   */
  exports.prototype['question_id'] = undefined;
  /**
   * @member {Boolean} answer_not_notify_all
   * @default false
   */
  exports.prototype['answer_not_notify_all'] = false;


  /**
   * Allowed values for the <code>content_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContentTypeEnum = {
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "image"
     * @const
     */
    "image": "image",
    /**
     * value: "voice"
     * @const
     */
    "voice": "voice",
    /**
     * value: "link"
     * @const
     */
    "link": "link",
    /**
     * value: "video"
     * @const
     */
    "video": "video"  };

  /**
   * Allowed values for the <code>share_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ShareTypeEnum = {
    /**
     * value: "share"
     * @const
     */
    "share": "share",
    /**
     * value: "up"
     * @const
     */
    "up": "up",
    /**
     * value: "down"
     * @const
     */
    "down": "down",
    /**
     * value: "reply"
     * @const
     */
    "reply": "reply",
    /**
     * value: "award"
     * @const
     */
    "award": "award"  };


  return exports;
}));


