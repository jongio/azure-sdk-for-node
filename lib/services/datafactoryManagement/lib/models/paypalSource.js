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

const models = require('./index');

/**
 * A copy activity Paypal Serivce source.
 *
 * @extends models['CopySource']
 */
class PaypalSource extends models['CopySource'] {
  /**
   * Create a PaypalSource.
   * @member {object} [query] A query to retrieve data from source. Type:
   * string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PaypalSource
   *
   * @returns {object} metadata of PaypalSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PaypalSource',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CopySource',
        className: 'PaypalSource',
        modelProperties: {
          sourceRetryCount: {
            required: false,
            serializedName: 'sourceRetryCount',
            type: {
              name: 'Object'
            }
          },
          sourceRetryWait: {
            required: false,
            serializedName: 'sourceRetryWait',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          query: {
            required: false,
            serializedName: 'query',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = PaypalSource;
