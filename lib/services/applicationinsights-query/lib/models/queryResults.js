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
 * @summary A query response.
  *
 * Contains the tables, columns & rows resulting from a query.
 *
 */
class QueryResults {
  /**
   * Create a QueryResults.
   * @member {array} tables The list of tables, columns and rows.
   */
  constructor() {
  }

  /**
   * Defines the metadata of QueryResults
   *
   * @returns {object} metadata of QueryResults
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'queryResults',
      type: {
        name: 'Composite',
        className: 'QueryResults',
        modelProperties: {
          tables: {
            required: true,
            serializedName: 'tables',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TableElementType',
                  type: {
                    name: 'Composite',
                    className: 'Table'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = QueryResults;
