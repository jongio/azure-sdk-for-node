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
 * InMageAzureV2 provider specific settings
 *
 * @extends models['ReplicationProviderSpecificSettings']
 */
class InMageAzureV2ReplicationDetails extends models['ReplicationProviderSpecificSettings'] {
  /**
   * Create a InMageAzureV2ReplicationDetails.
   * @member {string} [infrastructureVmId] The infrastructure VM Id.
   * @member {string} [vCenterInfrastructureId] The vCenter infrastructure Id.
   * @member {string} [protectionStage] The protection stage.
   * @member {string} [vmId] The virtual machine Id.
   * @member {string} [vmProtectionState] The protection state for the vm.
   * @member {string} [vmProtectionStateDescription] The protection state
   * description for the vm.
   * @member {number} [resyncProgressPercentage] The resync progress
   * percentage.
   * @member {number} [rpoInSeconds] The RPO in seconds.
   * @member {number} [compressedDataRateInMB] The compressed data change rate
   * in MB.
   * @member {number} [uncompressedDataRateInMB] The uncompressed data change
   * rate in MB.
   * @member {string} [ipAddress] The source IP address.
   * @member {string} [agentVersion] The agent version.
   * @member {string} [isAgentUpdateRequired] A value indicating whether
   * installed agent needs to be updated.
   * @member {string} [isRebootAfterUpdateRequired] A value indicating whether
   * the source server requires a restart after update.
   * @member {date} [lastHeartbeat] The last heartbeat received from the source
   * server.
   * @member {string} [processServerId] The process server Id.
   * @member {string} [multiVmGroupId] The multi vm group Id.
   * @member {string} [multiVmGroupName] The multi vm group name.
   * @member {string} [multiVmSyncStatus] A value indicating whether multi vm
   * sync is enabled or disabled.
   * @member {array} [protectedDisks] The list of protected disks.
   * @member {string} [diskResized] A value indicating whether any disk is
   * resized for this VM.
   * @member {string} [masterTargetId] The master target Id.
   * @member {number} [sourceVmCPUCount] The CPU count of the VM on the primary
   * side.
   * @member {number} [sourceVmRAMSizeInMB] The RAM size of the VM on the
   * primary side.
   * @member {string} [osType] The type of the OS on the VM.
   * @member {string} [vhdName] The OS disk VHD name.
   * @member {string} [osDiskId] The id of the disk containing the OS.
   * @member {array} [azureVMDiskDetails] Azure VM Disk details.
   * @member {string} [recoveryAzureVMName] Recovery Azure given name.
   * @member {string} [recoveryAzureVMSize] The Recovery Azure VM size.
   * @member {string} [recoveryAzureStorageAccount] The recovery Azure storage
   * account.
   * @member {string} [recoveryAzureLogStorageAccountId] The ARM id of the log
   * storage account used for replication. This will be set to null if no log
   * storage account was provided during enable protection.
   * @member {array} [vmNics] The PE Network details.
   * @member {string} [selectedRecoveryAzureNetworkId] The selected recovery
   * azure network Id.
   * @member {string} [discoveryType] A value indicating the discovery type of
   * the machine. Value can be vCenter or physical.
   * @member {string} [enableRDPOnTargetOption] The selected option to enable
   * RDP\SSH on target vm after failover. String value of
   * {SrsDataContract.EnableRDPOnTargetOption} enum.
   * @member {array} [datastores] The datastores of the on-premise machine.
   * Value can be list of strings that contain datastore names.
   * @member {string} [targetVmId] The ARM Id of the target Azure VM. This
   * value will be null until the VM is failed over. Only after failure it will
   * be populated with the ARM Id of the Azure VM.
   * @member {string} [recoveryAzureResourceGroupId] The target resource group
   * Id.
   * @member {string} [recoveryAvailabilitySetId] The recovery availability set
   * Id.
   * @member {string} [useManagedDisks] A value indicating whether managed
   * disks should be used during failover.
   * @member {string} [licenseType] License Type of the VM to be used.
   * @member {array} [validationErrors] The validation errors of the on-premise
   * machine Value can be list of validation errors.
   * @member {date} [lastRpoCalculatedTime] The last RPO calculated time.
   * @member {date} [lastUpdateReceivedTime] The last update time received from
   * on-prem components.
   * @member {string} [replicaId] The replica id of the protected item.
   * @member {string} [osVersion] The OS Version of the protected item.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of InMageAzureV2ReplicationDetails
   *
   * @returns {object} metadata of InMageAzureV2ReplicationDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InMageAzureV2',
      type: {
        name: 'Composite',
        className: 'InMageAzureV2ReplicationDetails',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          },
          infrastructureVmId: {
            required: false,
            serializedName: 'infrastructureVmId',
            type: {
              name: 'String'
            }
          },
          vCenterInfrastructureId: {
            required: false,
            serializedName: 'vCenterInfrastructureId',
            type: {
              name: 'String'
            }
          },
          protectionStage: {
            required: false,
            serializedName: 'protectionStage',
            type: {
              name: 'String'
            }
          },
          vmId: {
            required: false,
            serializedName: 'vmId',
            type: {
              name: 'String'
            }
          },
          vmProtectionState: {
            required: false,
            serializedName: 'vmProtectionState',
            type: {
              name: 'String'
            }
          },
          vmProtectionStateDescription: {
            required: false,
            serializedName: 'vmProtectionStateDescription',
            type: {
              name: 'String'
            }
          },
          resyncProgressPercentage: {
            required: false,
            serializedName: 'resyncProgressPercentage',
            type: {
              name: 'Number'
            }
          },
          rpoInSeconds: {
            required: false,
            serializedName: 'rpoInSeconds',
            type: {
              name: 'Number'
            }
          },
          compressedDataRateInMB: {
            required: false,
            serializedName: 'compressedDataRateInMB',
            type: {
              name: 'Number'
            }
          },
          uncompressedDataRateInMB: {
            required: false,
            serializedName: 'uncompressedDataRateInMB',
            type: {
              name: 'Number'
            }
          },
          ipAddress: {
            required: false,
            serializedName: 'ipAddress',
            type: {
              name: 'String'
            }
          },
          agentVersion: {
            required: false,
            serializedName: 'agentVersion',
            type: {
              name: 'String'
            }
          },
          isAgentUpdateRequired: {
            required: false,
            serializedName: 'isAgentUpdateRequired',
            type: {
              name: 'String'
            }
          },
          isRebootAfterUpdateRequired: {
            required: false,
            serializedName: 'isRebootAfterUpdateRequired',
            type: {
              name: 'String'
            }
          },
          lastHeartbeat: {
            required: false,
            serializedName: 'lastHeartbeat',
            type: {
              name: 'DateTime'
            }
          },
          processServerId: {
            required: false,
            serializedName: 'processServerId',
            type: {
              name: 'String'
            }
          },
          multiVmGroupId: {
            required: false,
            serializedName: 'multiVmGroupId',
            type: {
              name: 'String'
            }
          },
          multiVmGroupName: {
            required: false,
            serializedName: 'multiVmGroupName',
            type: {
              name: 'String'
            }
          },
          multiVmSyncStatus: {
            required: false,
            serializedName: 'multiVmSyncStatus',
            type: {
              name: 'String'
            }
          },
          protectedDisks: {
            required: false,
            serializedName: 'protectedDisks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InMageAzureV2ProtectedDiskDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'InMageAzureV2ProtectedDiskDetails'
                  }
              }
            }
          },
          diskResized: {
            required: false,
            serializedName: 'diskResized',
            type: {
              name: 'String'
            }
          },
          masterTargetId: {
            required: false,
            serializedName: 'masterTargetId',
            type: {
              name: 'String'
            }
          },
          sourceVmCPUCount: {
            required: false,
            serializedName: 'sourceVmCPUCount',
            type: {
              name: 'Number'
            }
          },
          sourceVmRAMSizeInMB: {
            required: false,
            serializedName: 'sourceVmRAMSizeInMB',
            type: {
              name: 'Number'
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            type: {
              name: 'String'
            }
          },
          vhdName: {
            required: false,
            serializedName: 'vhdName',
            type: {
              name: 'String'
            }
          },
          osDiskId: {
            required: false,
            serializedName: 'osDiskId',
            type: {
              name: 'String'
            }
          },
          azureVMDiskDetails: {
            required: false,
            serializedName: 'azureVMDiskDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AzureVmDiskDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureVmDiskDetails'
                  }
              }
            }
          },
          recoveryAzureVMName: {
            required: false,
            serializedName: 'recoveryAzureVMName',
            type: {
              name: 'String'
            }
          },
          recoveryAzureVMSize: {
            required: false,
            serializedName: 'recoveryAzureVMSize',
            type: {
              name: 'String'
            }
          },
          recoveryAzureStorageAccount: {
            required: false,
            serializedName: 'recoveryAzureStorageAccount',
            type: {
              name: 'String'
            }
          },
          recoveryAzureLogStorageAccountId: {
            required: false,
            serializedName: 'recoveryAzureLogStorageAccountId',
            type: {
              name: 'String'
            }
          },
          vmNics: {
            required: false,
            serializedName: 'vmNics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VMNicDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'VMNicDetails'
                  }
              }
            }
          },
          selectedRecoveryAzureNetworkId: {
            required: false,
            serializedName: 'selectedRecoveryAzureNetworkId',
            type: {
              name: 'String'
            }
          },
          discoveryType: {
            required: false,
            serializedName: 'discoveryType',
            type: {
              name: 'String'
            }
          },
          enableRDPOnTargetOption: {
            required: false,
            serializedName: 'enableRDPOnTargetOption',
            type: {
              name: 'String'
            }
          },
          datastores: {
            required: false,
            serializedName: 'datastores',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          targetVmId: {
            required: false,
            serializedName: 'targetVmId',
            type: {
              name: 'String'
            }
          },
          recoveryAzureResourceGroupId: {
            required: false,
            serializedName: 'recoveryAzureResourceGroupId',
            type: {
              name: 'String'
            }
          },
          recoveryAvailabilitySetId: {
            required: false,
            serializedName: 'recoveryAvailabilitySetId',
            type: {
              name: 'String'
            }
          },
          useManagedDisks: {
            required: false,
            serializedName: 'useManagedDisks',
            type: {
              name: 'String'
            }
          },
          licenseType: {
            required: false,
            serializedName: 'licenseType',
            type: {
              name: 'String'
            }
          },
          validationErrors: {
            required: false,
            serializedName: 'validationErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HealthErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'HealthError'
                  }
              }
            }
          },
          lastRpoCalculatedTime: {
            required: false,
            serializedName: 'lastRpoCalculatedTime',
            type: {
              name: 'DateTime'
            }
          },
          lastUpdateReceivedTime: {
            required: false,
            serializedName: 'lastUpdateReceivedTime',
            type: {
              name: 'DateTime'
            }
          },
          replicaId: {
            required: false,
            serializedName: 'replicaId',
            type: {
              name: 'String'
            }
          },
          osVersion: {
            required: false,
            serializedName: 'osVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InMageAzureV2ReplicationDetails;