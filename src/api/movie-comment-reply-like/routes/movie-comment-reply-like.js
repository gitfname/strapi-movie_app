'use strict';

/**
 * movie-comment-reply-like router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::movie-comment-reply-like.movie-comment-reply-like', {
    config: {
        create: {
            middlewares: ["global::injectOwnerId"]
        },
        update: {
            policies: ["global::isOwnerOf"]
        },
        delete: {
            policies: ["global::isOwnerOf"]
        }
    }
});
