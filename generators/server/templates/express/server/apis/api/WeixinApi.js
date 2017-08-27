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
    define(['ApiClient', 'model/Error', 'model/WxConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/WxConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.Mimir) {
      root.Mimir = {};
    }
    root.Mimir.WeixinApi = factory(root.Mimir.ApiClient, root.Mimir.Error, root.Mimir.WxConfig);
  }
}(this, function(ApiClient, Error, WxConfig) {
  'use strict';

  /**
   * Weixin service.
   * @module api/WeixinApi
   * @version 1.0.0
   */

  /**
   * Constructs a new WeixinApi. 
   * @alias module:api/WeixinApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the weixinConfigGet operation.
     * @callback module:api/WeixinApi~weixinConfigGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WxConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} url 
     * @param {module:api/WeixinApi~weixinConfigGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WxConfig}
     */
    this.weixinConfigGet = function(url, callback) {
      var postBody = null;

      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling weixinConfigGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'url': url
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['web'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WxConfig;

      return this.apiClient.callApi(
        '/weixin/config', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
