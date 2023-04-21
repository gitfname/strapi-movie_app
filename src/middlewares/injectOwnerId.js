module.exports = () => {
    return async (ctx, next) => {
        if(ctx.request.body?.data) {
            ctx.request.body.data.owner = ctx.state.user.id
        }
        await next()
    }
}