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
 * Hyper V VM network details.
 *
 */
class VMNicDetails {
  /**
   * Create a VMNicDetails.
   * @member {string} [nicId] The nic Id.
   * @member {string} [replicaNicId] The replica nic Id.
   * @member {string} [sourceNicArmId] The source nic ARM Id.
   * @member {string} [vMSubnetName] VM subnet name.
   * @member {string} [vMNetworkName] VM network name.
   * @member {string} [recoveryVMNetworkId] Recovery VM network Id.
   * @member {string} [recoveryVMSubnetName] Recovery VM subnet name.
   * @member {string} [ipAddressType] Ip address type.
   * @member {string} [primaryNicStaticIPAddress] Primary nic static IP
   * address.
   * @member {string} [replicaNicStaticIPAddress] Replica nic static IP
   * address.
   * @member {string} [selectionType] Selection type for failover.
   * @member {string} [recoveryNicIpAddressType] IP allocation type for
   * recovery VM.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VMNicDetails
   *
   * @returns {object} metadata of VMNicDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VMNicDetails',
      type: {
        name: 'Composite',
        className: 'VMNicDetails',
        modelProperties: {
          nicId: {
            required: false,
            serializedName: 'nicId',
            type: {
              name: 'String'
            }
          },
          replicaNicId: {
            required: false,
            serializedName: 'replicaNicId',
            type: {
              name: 'String'
            }
          },
          sourceNicArmId: {
            required: false,
            serializedName: 'sourceNicArmId',
            type: {
              name: 'String'
            }
          },
          vMSubnetName: {
            required: false,
            serializedName: 'vMSubnetName',
            type: {
              name: 'String'
            }
          },
          vMNetworkName: {
            required: false,
            serializedName: 'vMNetworkName',
            type: {
              name: 'String'
            }
          },
          recoveryVMNetworkId: {
            required: false,
            serializedName: 'recoveryVMNetworkId',
            type: {
              name: 'String'
            }
          },
          recoveryVMSubnetName: {
            required: false,
            serializedName: 'recoveryVMSubnetName',
            type: {
              name: 'String'
            }
          },
          ipAddressType: {
            required: false,
            serializedName: 'ipAddressType',
            type: {
              name: 'String'
            }
          },
          primaryNicStaticIPAddress: {
            required: false,
            serializedName: 'primaryNicStaticIPAddress',
            type: {
              name: 'String'
            }
          },
          replicaNicStaticIPAddress: {
            required: false,
            serializedName: 'replicaNicStaticIPAddress',
            type: {
              name: 'String'
            }
          },
          selectionType: {
            required: false,
            serializedName: 'selectionType',
            type: {
              name: 'String'
            }
          },
          recoveryNicIpAddressType: {
            required: false,
            serializedName: 'recoveryNicIpAddressType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VMNicDetails;