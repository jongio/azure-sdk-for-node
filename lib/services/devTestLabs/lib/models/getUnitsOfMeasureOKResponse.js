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
 * Class representing a GetUnitsOfMeasureOKResponse.
 */
class GetUnitsOfMeasureOKResponse {
  /**
   * Create a GetUnitsOfMeasureOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetUnitsOfMeasureOKResponse
   *
   * @returns {object} metadata of GetUnitsOfMeasureOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetUnitsOfMeasureOKResponse',
      type: {
        name: 'Composite',
        className: 'GetUnitsOfMeasureOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UnitOfMeasureElementType',
                  type: {
                    name: 'Composite',
                    className: 'UnitOfMeasure'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetUnitsOfMeasureOKResponse;