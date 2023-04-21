'use strict';

/**
 * tv-show-comment-reply router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tv-show-comment-reply.tv-show-comment-reply', {
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
