module.exports = () => {
    return async (ctx, next) => {
        if(ctx.request.url.startsWith("/admin")) {
            if(ctx.cookies.get("secret") !== process.env.ADMIN_PAGE_SECRET_KEY) {
                ctx.response.status = 404
                ctx.body = "404"
                return
            }
            await next()
        }
        else {
            await next()
        }
    }
}