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
 * Class representing a DimensionValue.
 */
class DimensionValue {
  /**
   * Create a DimensionValue.
   * @property {uuid} [id] The id property for the dimensionValue entity
   * @property {string} [code] The code property for the dimensionValue entity
   * @property {string} [displayName] The displayName property for the
   * dimensionValue entity
   * @property {date} [lastModifiedDateTime] The lastModifiedDateTime property
   * for the dimensionValue entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of DimensionValue
   *
   * @returns {object} metadata of DimensionValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'dimensionValue',
      type: {
        name: 'Composite',
        className: 'DimensionValue',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            constraints: {
              MaxLength: 20
            },
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            constraints: {
              MaxLength: 50
            },
            type: {
              name: 'String'
            }
          },
          lastModifiedDateTime: {
            required: false,
            serializedName: 'lastModifiedDateTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = DimensionValue;