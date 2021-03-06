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
 * Represents the prediction of a query.
 *
 */
class Prediction {
  /**
   * Create a Prediction.
   * @property {string} normalizedQuery The query after pre-processing and
   * normalization.
   * @property {string} [alteredQuery] The query after spell checking. Only set
   * if spell check was enabled and a spelling mistake was found.
   * @property {string} topIntent The name of the top scoring intent.
   * @property {object} intents A dictionary representing the intents that
   * fired.
   * @property {object} entities The dictionary representing the entities that
   * fired.
   * @property {object} [sentiment] The result of the sentiment analysis.
   * @property {number} [sentiment.score] The sentiment score of the query.
   * @property {string} [sentiment.label] The label of the sentiment analysis
   * result.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Prediction
   *
   * @returns {object} metadata of Prediction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Prediction',
      type: {
        name: 'Composite',
        className: 'Prediction',
        modelProperties: {
          normalizedQuery: {
            required: true,
            serializedName: 'normalizedQuery',
            type: {
              name: 'String'
            }
          },
          alteredQuery: {
            required: false,
            serializedName: 'alteredQuery',
            type: {
              name: 'String'
            }
          },
          topIntent: {
            required: true,
            serializedName: 'topIntent',
            type: {
              name: 'String'
            }
          },
          intents: {
            required: true,
            serializedName: 'intents',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'IntentElementType',
                  type: {
                    name: 'Composite',
                    className: 'Intent'
                  }
              }
            }
          },
          entities: {
            required: true,
            serializedName: 'entities',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          sentiment: {
            required: false,
            serializedName: 'sentiment',
            type: {
              name: 'Composite',
              className: 'Sentiment'
            }
          }
        }
      }
    };
  }
}

module.exports = Prediction;
