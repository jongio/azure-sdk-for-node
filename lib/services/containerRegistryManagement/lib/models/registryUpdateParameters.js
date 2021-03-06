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
 * The parameters for updating a container registry.
 *
 */
class RegistryUpdateParameters {
  /**
   * Create a RegistryUpdateParameters.
   * @property {object} [tags] The tags for the container registry.
   * @property {object} [sku] The SKU of the container registry.
   * @property {string} [sku.name] The SKU name of the container registry.
   * Required for registry creation. Possible values include: 'Classic',
   * 'Basic', 'Standard', 'Premium'
   * @property {string} [sku.tier] The SKU tier based on the SKU name. Possible
   * values include: 'Classic', 'Basic', 'Standard', 'Premium'
   * @property {boolean} [adminUserEnabled] The value that indicates whether
   * the admin user is enabled.
   * @property {object} [storageAccount] The parameters of a storage account
   * for the container registry. Only applicable to Classic SKU. If specified,
   * the storage account must be in the same physical location as the container
   * registry.
   * @property {string} [storageAccount.id] The resource ID of the storage
   * account.
   * @property {object} [networkRuleSet] The network rule set for a container
   * registry.
   * @property {string} [networkRuleSet.defaultAction] The default action of
   * allow or deny when no other rules match. Possible values include: 'Allow',
   * 'Deny'
   * @property {array} [networkRuleSet.virtualNetworkRules] The virtual network
   * rules.
   * @property {array} [networkRuleSet.ipRules] The IP ACL rules.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RegistryUpdateParameters
   *
   * @returns {object} metadata of RegistryUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RegistryUpdateParameters',
      type: {
        name: 'Composite',
        className: 'RegistryUpdateParameters',
        modelProperties: {
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
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          adminUserEnabled: {
            required: false,
            serializedName: 'properties.adminUserEnabled',
            type: {
              name: 'Boolean'
            }
          },
          storageAccount: {
            required: false,
            serializedName: 'properties.storageAccount',
            type: {
              name: 'Composite',
              className: 'StorageAccountProperties'
            }
          },
          networkRuleSet: {
            required: false,
            serializedName: 'properties.networkRuleSet',
            type: {
              name: 'Composite',
              className: 'NetworkRuleSet'
            }
          }
        }
      }
    };
  }
}

module.exports = RegistryUpdateParameters;
