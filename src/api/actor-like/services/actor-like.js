'use strict';

/**
 * actor-like service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::actor-like.actor-like');
