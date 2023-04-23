'use strict';

/**
 * tv-show-comment-reply-like router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tv-show-comment-reply-like.tv-show-comment-reply-like', {
    config: {
        create: {
            policies: ["global::isUserExistsInTvSeriesCommentReplyLike"],
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
