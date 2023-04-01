'use strict';

/**
 * A set of functions called "actions" for `user-actions`
 */

module.exports = {
  update: async (ctx, next) => {
    try {
      const { id } = ctx.state.user
      const userId = ctx.params.userid
  
      if(id.toString() !==  userId.toString()) {
        ctx.body = "you can't change other users details"
        return
      }
  
      const { data } = ctx.request.body
  
      if(!data) {
        ctx.body = "the data property in the reuest body is required"
        return
      }
  
      const keys = Object.getOwnPropertyNames(data)
  
      keys.forEach(key => {
        if(data[key].toString().length > 120) {
          ctx.body = "too large data"
          throw Error("too large data")
        }
      })
  
      const res = await strapi.entityService.update("plugin::users-permissions.user", id, {
        fields: ["id", ...keys],
        data
      })
  
      ctx.body = res
    } catch(err) {
      console.log(err);
    }
  }
};
