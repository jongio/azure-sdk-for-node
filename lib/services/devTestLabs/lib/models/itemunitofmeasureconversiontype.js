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
 * Class representing a Itemunitofmeasureconversiontype.
 */
class Itemunitofmeasureconversiontype {
  /**
   * Create a Itemunitofmeasureconversiontype.
   * @property {string} [toUnitOfMeasure] The toUnitOfMeasure property for the
   * itemunitofmeasureconversiontype entity
   * @property {number} [fromToConversionRate] The fromToConversionRate
   * property for the itemunitofmeasureconversiontype entity
   * @property {array} [picture]
   * @property {array} [defaultDimensions]
   * @property {object} [itemCategory]
   * @property {uuid} [itemCategory.id] The id property for the itemCategory
   * entity
   * @property {string} [itemCategory.code] The code property for the
   * itemCategory entity
   * @property {string} [itemCategory.displayName] The displayName property for
   * the itemCategory entity
   * @property {date} [itemCategory.lastModifiedDateTime] The
   * lastModifiedDateTime property for the itemCategory entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of Itemunitofmeasureconversiontype
   *
   * @returns {object} metadata of Itemunitofmeasureconversiontype
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'itemunitofmeasureconversiontype',
      type: {
        name: 'Composite',
        className: 'Itemunitofmeasureconversiontype',
        modelProperties: {
          toUnitOfMeasure: {
            required: false,
            serializedName: 'toUnitOfMeasure',
            constraints: {
              MaxLength: 10
            },
            type: {
              name: 'String'
            }
          },
          fromToConversionRate: {
            required: false,
            serializedName: 'fromToConversionRate',
            type: {
              name: 'Number'
            }
          },
          picture: {
            required: false,
            serializedName: 'picture',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PictureElementType',
                  type: {
                    name: 'Composite',
                    className: 'Picture'
                  }
              }
            }
          },
          defaultDimensions: {
            required: false,
            serializedName: 'defaultDimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DefaultDimensionsElementType',
                  type: {
                    name: 'Composite',
                    className: 'DefaultDimensions'
                  }
              }
            }
          },
          itemCategory: {
            required: false,
            serializedName: 'itemCategory',
            type: {
              name: 'Composite',
              className: 'ItemCategory'
            }
          }
        }
      }
    };
  }
}

module.exports = Itemunitofmeasureconversiontype;