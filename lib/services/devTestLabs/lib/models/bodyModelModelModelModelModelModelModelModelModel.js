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
 * Class representing a BodyModelModelModelModelModelModelModelModelModel.
 */
class BodyModelModelModelModelModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModelModelModelModelModel.
   * @property {uuid} [id] The id property for the customerPayment entity
   * @property {string} [journalDisplayName] The journalDisplayName property
   * for the customerPayment entity
   * @property {number} [lineNumber] The lineNumber property for the
   * customerPayment entity
   * @property {uuid} [customerId] The customerId property for the
   * customerPayment entity
   * @property {string} [customerNumber] The customerNumber property for the
   * customerPayment entity
   * @property {string} [contactId] The contactId property for the
   * customerPayment entity
   * @property {date} [postingDate] The postingDate property for the
   * customerPayment entity
   * @property {string} [documentNumber] The documentNumber property for the
   * customerPayment entity
   * @property {string} [externalDocumentNumber] The externalDocumentNumber
   * property for the customerPayment entity
   * @property {number} [amount] The amount property for the customerPayment
   * entity
   * @property {uuid} [appliesToInvoiceId] The appliesToInvoiceId property for
   * the customerPayment entity
   * @property {string} [appliesToInvoiceNumber] The appliesToInvoiceNumber
   * property for the customerPayment entity
   * @property {string} [description] The description property for the
   * customerPayment entity
   * @property {string} [comment] The comment property for the customerPayment
   * entity
   * @property {array} [dimensions]
   * @property {date} [lastModifiedDateTime] The lastModifiedDateTime property
   * for the customerPayment entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModelModelModelModelModel',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          journalDisplayName: {
            required: false,
            serializedName: 'journalDisplayName',
            type: {
              name: 'String'
            }
          },
          lineNumber: {
            required: false,
            serializedName: 'lineNumber',
            type: {
              name: 'Number'
            }
          },
          customerId: {
            required: false,
            serializedName: 'customerId',
            type: {
              name: 'String'
            }
          },
          customerNumber: {
            required: false,
            serializedName: 'customerNumber',
            constraints: {
              MaxLength: 20
            },
            type: {
              name: 'String'
            }
          },
          contactId: {
            required: false,
            serializedName: 'contactId',
            constraints: {
              MaxLength: 250
            },
            type: {
              name: 'String'
            }
          },
          postingDate: {
            required: false,
            serializedName: 'postingDate',
            type: {
              name: 'DateTime'
            }
          },
          documentNumber: {
            required: false,
            serializedName: 'documentNumber',
            constraints: {
              MaxLength: 20
            },
            type: {
              name: 'String'
            }
          },
          externalDocumentNumber: {
            required: false,
            serializedName: 'externalDocumentNumber',
            constraints: {
              MaxLength: 35
            },
            type: {
              name: 'String'
            }
          },
          amount: {
            required: false,
            serializedName: 'amount',
            type: {
              name: 'Number'
            }
          },
          appliesToInvoiceId: {
            required: false,
            serializedName: 'appliesToInvoiceId',
            type: {
              name: 'String'
            }
          },
          appliesToInvoiceNumber: {
            required: false,
            serializedName: 'appliesToInvoiceNumber',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            constraints: {
              MaxLength: 100
            },
            type: {
              name: 'String'
            }
          },
          comment: {
            required: false,
            serializedName: 'comment',
            constraints: {
              MaxLength: 250
            },
            type: {
              name: 'String'
            }
          },
          dimensions: {
            required: false,
            serializedName: 'dimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DimensiontypeElementType',
                  type: {
                    name: 'Composite',
                    className: 'Dimensiontype'
                  }
              }
            }
          },
          lastModifiedDateTime: {
            required: false,
            serializedName: 'lastModifiedDateTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModelModelModelModelModel;