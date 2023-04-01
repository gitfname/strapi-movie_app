'use strict';

/**
 * actress-like service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::actress-like.actress-like');
