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
 * The SAS definition update parameters.
 *
 */
class SasDefinitionUpdateParameters {
  /**
   * Create a SasDefinitionUpdateParameters.
   * @member {object} [parameters] Sas definition update metadata in the form
   * of key-value pairs.
   * @member {object} [sasDefinitionAttributes] The attributes of the SAS
   * definition.
   * @member {boolean} [sasDefinitionAttributes.enabled] the enabled state of
   * the object.
   * @member {date} [sasDefinitionAttributes.created] Creation time in UTC.
   * @member {date} [sasDefinitionAttributes.updated] Last updated time in UTC.
   * @member {object} [tags] Application specific metadata in the form of
   * key-value pairs.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SasDefinitionUpdateParameters
   *
   * @returns {object} metadata of SasDefinitionUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SasDefinitionUpdateParameters',
      type: {
        name: 'Composite',
        className: 'SasDefinitionUpdateParameters',
        modelProperties: {
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sasDefinitionAttributes: {
            required: false,
            serializedName: 'attributes',
            type: {
              name: 'Composite',
              className: 'SasDefinitionAttributes'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SasDefinitionUpdateParameters;