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
 * Class representing a Postaladdresstype.
 */
class Postaladdresstype {
  /**
   * Create a Postaladdresstype.
   * @property {string} [street] The street property for the postaladdresstype
   * entity
   * @property {string} [city] The city property for the postaladdresstype
   * entity
   * @property {string} [state] The state property for the postaladdresstype
   * entity
   * @property {string} [countryLetterCode] The countryLetterCode property for
   * the postaladdresstype entity
   * @property {string} [postalCode] The postalCode property for the
   * postaladdresstype entity
   * @property {array} [customerFinancialDetails]
   * @property {array} [picture]
   * @property {array} [defaultDimensions]
   * @property {object} [currency]
   * @property {uuid} [currency.id] The id property for the currency entity
   * @property {string} [currency.code] The code property for the currency
   * entity
   * @property {string} [currency.displayName] The displayName property for the
   * currency entity
   * @property {string} [currency.symbol] The symbol property for the currency
   * entity
   * @property {string} [currency.amountDecimalPlaces] The amountDecimalPlaces
   * property for the currency entity
   * @property {number} [currency.amountRoundingPrecision] The
   * amountRoundingPrecision property for the currency entity
   * @property {date} [currency.lastModifiedDateTime] The lastModifiedDateTime
   * property for the currency entity
   * @property {object} [paymentTerm]
   * @property {uuid} [paymentTerm.id] The id property for the paymentTerm
   * entity
   * @property {string} [paymentTerm.code] The code property for the
   * paymentTerm entity
   * @property {string} [paymentTerm.displayName] The displayName property for
   * the paymentTerm entity
   * @property {string} [paymentTerm.dueDateCalculation] The dueDateCalculation
   * property for the paymentTerm entity
   * @property {string} [paymentTerm.discountDateCalculation] The
   * discountDateCalculation property for the paymentTerm entity
   * @property {number} [paymentTerm.discountPercent] The discountPercent
   * property for the paymentTerm entity
   * @property {boolean} [paymentTerm.calculateDiscountOnCreditMemos] The
   * calculateDiscountOnCreditMemos property for the paymentTerm entity
   * @property {date} [paymentTerm.lastModifiedDateTime] The
   * lastModifiedDateTime property for the paymentTerm entity
   * @property {object} [shipmentMethod]
   * @property {uuid} [shipmentMethod.id] The id property for the
   * shipmentMethod entity
   * @property {string} [shipmentMethod.code] The code property for the
   * shipmentMethod entity
   * @property {string} [shipmentMethod.displayName] The displayName property
   * for the shipmentMethod entity
   * @property {date} [shipmentMethod.lastModifiedDateTime] The
   * lastModifiedDateTime property for the shipmentMethod entity
   * @property {object} [paymentMethod]
   * @property {uuid} [paymentMethod.id] The id property for the paymentMethod
   * entity
   * @property {string} [paymentMethod.code] The code property for the
   * paymentMethod entity
   * @property {string} [paymentMethod.displayName] The displayName property
   * for the paymentMethod entity
   * @property {date} [paymentMethod.lastModifiedDateTime] The
   * lastModifiedDateTime property for the paymentMethod entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of Postaladdresstype
   *
   * @returns {object} metadata of Postaladdresstype
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'postaladdresstype',
      type: {
        name: 'Composite',
        className: 'Postaladdresstype',
        modelProperties: {
          street: {
            required: false,
            serializedName: 'street',
            constraints: {
              MaxLength: 152
            },
            type: {
              name: 'String'
            }
          },
          city: {
            required: false,
            serializedName: 'city',
            constraints: {
              MaxLength: 30
            },
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            constraints: {
              MaxLength: 30
            },
            type: {
              name: 'String'
            }
          },
          countryLetterCode: {
            required: false,
            serializedName: 'countryLetterCode',
            constraints: {
              MaxLength: 10
            },
            type: {
              name: 'String'
            }
          },
          postalCode: {
            required: false,
            serializedName: 'postalCode',
            constraints: {
              MaxLength: 20
            },
            type: {
              name: 'String'
            }
          },
          customerFinancialDetails: {
            required: false,
            serializedName: 'customerFinancialDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CustomerFinancialDetailElementType',
                  type: {
                    name: 'Composite',
                    className: 'CustomerFinancialDetail'
                  }
              }
            }
          },
          picture: {
            required: false,
            serializedName: 'picture',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PictureElementType',
                  type: {
                    name: 'Composite',
                    className: 'Picture'
                  }
              }
            }
          },
          defaultDimensions: {
            required: false,
            serializedName: 'defaultDimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DefaultDimensionsElementType',
                  type: {
                    name: 'Composite',
                    className: 'DefaultDimensions'
                  }
              }
            }
          },
          currency: {
            required: false,
            serializedName: 'currency',
            type: {
              name: 'Composite',
              className: 'Currency'
            }
          },
          paymentTerm: {
            required: false,
            serializedName: 'paymentTerm',
            type: {
              name: 'Composite',
              className: 'PaymentTerm'
            }
          },
          shipmentMethod: {
            required: false,
            serializedName: 'shipmentMethod',
            type: {
              name: 'Composite',
              className: 'ShipmentMethod'
            }
          },
          paymentMethod: {
            required: false,
            serializedName: 'paymentMethod',
            type: {
              name: 'Composite',
              className: 'PaymentMethod'
            }
          }
        }
      }
    };
  }
}

module.exports = Postaladdresstype;