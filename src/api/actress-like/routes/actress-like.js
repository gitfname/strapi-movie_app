'use strict';

/**
 * actress-like router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::actress-like.actress-like', {
    config: {
        create: {
            middlewares: ["global::injectOwnerId"]
        },
        delete: {
            policies: ["global::isOwnerOf"]
        },
        update: {
            policies: ["global::isOwnerOf"]
        }
    }
});
