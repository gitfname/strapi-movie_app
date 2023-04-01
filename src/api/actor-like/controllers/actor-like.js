'use strict';

/**
 * actor-like controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::actor-like.actor-like');
