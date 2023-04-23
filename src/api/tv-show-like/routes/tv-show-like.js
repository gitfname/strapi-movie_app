'use strict';

/**
 * tv-show-like router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tv-show-like.tv-show-like', {
    config: {
        create: {
            policies: ["global::isUserAlreadyLikedTvShow"],
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
