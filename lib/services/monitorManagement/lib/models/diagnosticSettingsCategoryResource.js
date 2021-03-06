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
 * The diagnostic settings category resource.
 *
 * @extends models['ProxyOnlyResource']
 */
class DiagnosticSettingsCategoryResource extends models['ProxyOnlyResource'] {
  /**
   * Create a DiagnosticSettingsCategoryResource.
   * @property {string} [categoryType] The type of the diagnostic settings
   * category. Possible values include: 'Metrics', 'Logs'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DiagnosticSettingsCategoryResource
   *
   * @returns {object} metadata of DiagnosticSettingsCategoryResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticSettingsCategoryResource',
      type: {
        name: 'Composite',
        className: 'DiagnosticSettingsCategoryResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          categoryType: {
            required: false,
            nullable: false,
            serializedName: 'properties.categoryType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Metrics', 'Logs' ]
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticSettingsCategoryResource;
