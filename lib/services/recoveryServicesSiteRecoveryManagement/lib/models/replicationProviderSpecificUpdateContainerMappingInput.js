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
 * Provider specific input for update pairing operations.
 *
 */
class ReplicationProviderSpecificUpdateContainerMappingInput {
  /**
   * Create a ReplicationProviderSpecificUpdateContainerMappingInput.
   * @member {string} instanceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReplicationProviderSpecificUpdateContainerMappingInput
   *
   * @returns {object} metadata of ReplicationProviderSpecificUpdateContainerMappingInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReplicationProviderSpecificUpdateContainerMappingInput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'ReplicationProviderSpecificUpdateContainerMappingInput',
        className: 'ReplicationProviderSpecificUpdateContainerMappingInput',
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

module.exports = ReplicationProviderSpecificUpdateContainerMappingInput;
