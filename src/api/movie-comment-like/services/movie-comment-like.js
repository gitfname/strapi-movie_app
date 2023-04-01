'use strict';

/**
 * movie-comment-like service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-comment-like.movie-comment-like');
