'use strict';

/**
 * tv-show-comment-like router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tv-show-comment-like.tv-show-comment-like', {
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
