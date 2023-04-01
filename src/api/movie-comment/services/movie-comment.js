'use strict';

/**
 * movie-comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-comment.movie-comment');
