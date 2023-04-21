'use strict';

/**
 * movie-comment-reply router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::movie-comment-reply.movie-comment-reply', {
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
