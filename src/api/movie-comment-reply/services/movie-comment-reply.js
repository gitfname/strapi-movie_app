'use strict';

/**
 * movie-comment-reply service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-comment-reply.movie-comment-reply');
