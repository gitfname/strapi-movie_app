'use strict';

/**
 * actor-like router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::actor-like.actor-like', {
    config: {
        create: {
            middlewares: ["global::injectOwnerId"]
        },
        update: {
            policies: ['global::isOwnerOf']
        },
        delete: {
            policies: ["global::isOwnerOf"]
        }
    }
});
