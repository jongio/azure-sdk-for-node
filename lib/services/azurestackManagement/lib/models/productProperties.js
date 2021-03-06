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
 * Additional properties of the product
 *
 */
class ProductProperties {
  /**
   * Create a ProductProperties.
   * @member {string} [version] The version.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProductProperties
   *
   * @returns {object} metadata of ProductProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProductProperties',
      type: {
        name: 'Composite',
        className: 'ProductProperties',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProductProperties;
