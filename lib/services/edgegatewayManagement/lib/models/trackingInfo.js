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
 * Tracking courier information.
 *
 */
class TrackingInfo {
  /**
   * Create a TrackingInfo.
   * @property {string} [serialNumber] Serial number of the device being
   * tracked.
   * @property {string} [carrierName] Name of the carrier used in the delivery.
   * @property {string} [trackingId] Tracking ID of the shipment.
   * @property {string} [trackingUrl] Tracking URL of the shipment.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrackingInfo
   *
   * @returns {object} metadata of TrackingInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrackingInfo',
      type: {
        name: 'Composite',
        className: 'TrackingInfo',
        modelProperties: {
          serialNumber: {
            required: false,
            serializedName: 'serialNumber',
            type: {
              name: 'String'
            }
          },
          carrierName: {
            required: false,
            serializedName: 'carrierName',
            type: {
              name: 'String'
            }
          },
          trackingId: {
            required: false,
            serializedName: 'trackingId',
            type: {
              name: 'String'
            }
          },
          trackingUrl: {
            required: false,
            serializedName: 'trackingUrl',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TrackingInfo;