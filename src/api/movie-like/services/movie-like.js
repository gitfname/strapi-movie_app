'use strict';

/**
 * movie-like service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-like.movie-like');
