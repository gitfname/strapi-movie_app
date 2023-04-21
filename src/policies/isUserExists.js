module.exports = async (policyContext, config) => {

    const apiName = policyContext.state.route.info.apiName

    const isUserExists = await strapi.entityService.findMany("api::"+apiName+"."+apiName, {
        fields: ["id"],
        filters: {
            owner: {
                "id": {$eq: policyContext.state.user.id}
            }
        }
    })

    if(isUserExists.length > 0) {
        return false
    }

    return true
}