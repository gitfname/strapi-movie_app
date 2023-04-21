module.exports = async (policyContext, config) => {

    const apiName = policyContext.state.route.info.apiName

    const creator = await strapi.entityService.findOne("api::"+apiName+"."+apiName, policyContext.params.id, {
        populate: {
            "owner": true
        }
    })

    if(parseInt(policyContext.state?.user?.id) != parseInt(creator?.owner?.id)) {
        return false
    }

    return true
}