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
 * An Azure SQL Database sync agent linked database.
 *
 * @extends models['ProxyResource']
 */
class SyncAgentLinkedDatabase extends models['ProxyResource'] {
  /**
   * Create a SyncAgentLinkedDatabase.
   * @member {string} [databaseType] Type of the sync agent linked database.
   * Possible values include: 'AzureSqlDatabase', 'SqlServerDatabase'
   * @member {string} [databaseId] Id of the sync agent linked database.
   * @member {string} [description] Description of the sync agent linked
   * database.
   * @member {string} [serverName] Server name of the sync agent linked
   * database.
   * @member {string} [databaseName] Database name of the sync agent linked
   * database.
   * @member {string} [userName] User name of the sync agent linked database.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SyncAgentLinkedDatabase
   *
   * @returns {object} metadata of SyncAgentLinkedDatabase
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SyncAgentLinkedDatabase',
      type: {
        name: 'Composite',
        className: 'SyncAgentLinkedDatabase',
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
          databaseType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseType',
            type: {
              name: 'String'
            }
          },
          databaseId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseId',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          serverName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.serverName',
            type: {
              name: 'String'
            }
          },
          databaseName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseName',
            type: {
              name: 'String'
            }
          },
          userName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.userName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SyncAgentLinkedDatabase;