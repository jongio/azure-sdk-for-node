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
 * Class representing a AgedAccountsPayable.
 */
class AgedAccountsPayable {
  /**
   * Create a AgedAccountsPayable.
   * @property {uuid} [vendorId] The vendorId property for the
   * agedAccountsPayable entity
   * @property {string} [vendorNumber] The vendorNumber property for the
   * agedAccountsPayable entity
   * @property {string} [name] The name property for the agedAccountsPayable
   * entity
   * @property {string} [currencyCode] The currencyCode property for the
   * agedAccountsPayable entity
   * @property {number} [balanceDue] The balanceDue property for the
   * agedAccountsPayable entity
   * @property {number} [currentAmount] The currentAmount property for the
   * agedAccountsPayable entity
   * @property {number} [period1Amount] The period1Amount property for the
   * agedAccountsPayable entity
   * @property {number} [period2Amount] The period2Amount property for the
   * agedAccountsPayable entity
   * @property {number} [period3Amount] The period3Amount property for the
   * agedAccountsPayable entity
   * @property {date} [agedAsOfDate] The agedAsOfDate property for the
   * agedAccountsPayable entity
   * @property {string} [periodLengthFilter] The periodLengthFilter property
   * for the agedAccountsPayable entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of AgedAccountsPayable
   *
   * @returns {object} metadata of AgedAccountsPayable
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'agedAccountsPayable',
      type: {
        name: 'Composite',
        className: 'AgedAccountsPayable',
        modelProperties: {
          vendorId: {
            required: false,
            serializedName: 'vendorId',
            type: {
              name: 'String'
            }
          },
          vendorNumber: {
            required: false,
            serializedName: 'vendorNumber',
            constraints: {
              MaxLength: 20
            },
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 100
            },
            type: {
              name: 'String'
            }
          },
          currencyCode: {
            required: false,
            serializedName: 'currencyCode',
            constraints: {
              MaxLength: 10
            },
            type: {
              name: 'String'
            }
          },
          balanceDue: {
            required: false,
            serializedName: 'balanceDue',
            type: {
              name: 'Number'
            }
          },
          currentAmount: {
            required: false,
            serializedName: 'currentAmount',
            type: {
              name: 'Number'
            }
          },
          period1Amount: {
            required: false,
            serializedName: 'period1Amount',
            type: {
              name: 'Number'
            }
          },
          period2Amount: {
            required: false,
            serializedName: 'period2Amount',
            type: {
              name: 'Number'
            }
          },
          period3Amount: {
            required: false,
            serializedName: 'period3Amount',
            type: {
              name: 'Number'
            }
          },
          agedAsOfDate: {
            required: false,
            serializedName: 'agedAsOfDate',
            type: {
              name: 'DateTime'
            }
          },
          periodLengthFilter: {
            required: false,
            serializedName: 'periodLengthFilter',
            constraints: {
              MaxLength: 10
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AgedAccountsPayable;