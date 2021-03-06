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
 * The encoder can be configured to produce video and/or images (thumbnails) at
 * different resolutions, by specifying a layer for each desired resolution. A
 * layer represents the properties for the video or image at a resolution.
 *
 */
class Layer {
  /**
   * Create a Layer.
   * @property {string} [width] The width of the output video for this layer.
   * The value can be absolute (in pixels) or relative (in percentage). For
   * example 50% means the output video has half as many pixels in width as the
   * input.
   * @property {string} [height] The height of the output video for this layer.
   * The value can be absolute (in pixels) or relative (in percentage). For
   * example 50% means the output video has half as many pixels in height as
   * the input.
   * @property {string} [label] The alphanumeric label for this layer, which
   * can be used in multiplexing different video and audio layers, or in naming
   * the output file.
   * @property {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Layer
   *
   * @returns {object} metadata of Layer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Layer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Layer',
        className: 'Layer',
        modelProperties: {
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'String'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'String'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Layer;
