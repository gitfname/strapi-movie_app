'use strict';

/**
 * tv-show service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tv-show.tv-show');
