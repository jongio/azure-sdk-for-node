/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * this is the extended error info
 *
 */
class ExtendedErrorInfo {
  /**
   * Create a ExtendedErrorInfo.
   * @member {string} [code] this is the error response code. Possible values
   * include: 'NotFound', 'Conflict', 'BadRequest'
   * @member {string} [message] this is the extended error info message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExtendedErrorInfo
   *
   * @returns {object} metadata of ExtendedErrorInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExtendedErrorInfo',
      type: {
        name: 'Composite',
        className: 'ExtendedErrorInfo',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExtendedErrorInfo;