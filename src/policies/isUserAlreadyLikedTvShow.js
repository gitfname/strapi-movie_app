module.exports = async (policyContext, config) => {

    const apiName = policyContext.state.route.info.apiName

    const isUserExists = await strapi.entityService.findMany("api::"+apiName+"."+apiName, {
        fields: ["id"],
        filters: {
            $and: [
                {
                    owner: {
                        "id": {$eq: policyContext.state.user.id}
                    }
                },
                {
                    tv_show: {
                        "id": {$eq: parseInt(policyContext.request.body.data.tv_show)}
                    }
                }
            ]
        }
    })

    if(isUserExists.length > 0) {
        return false
    }

    return true
}