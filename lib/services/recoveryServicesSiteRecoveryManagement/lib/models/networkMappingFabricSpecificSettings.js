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
 * Network Mapping fabric specific settings.
 *
 */
class NetworkMappingFabricSpecificSettings {
  /**
   * Create a NetworkMappingFabricSpecificSettings.
   * @member {string} instanceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkMappingFabricSpecificSettings
   *
   * @returns {object} metadata of NetworkMappingFabricSpecificSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkMappingFabricSpecificSettings',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'NetworkMappingFabricSpecificSettings',
        className: 'NetworkMappingFabricSpecificSettings',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkMappingFabricSpecificSettings;
