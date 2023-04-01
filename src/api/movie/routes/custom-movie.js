module.exports = {
    routes: [
        { 
            method: 'GET',
            path: '/movies/populate-data', 
            handler: 'populate-data.populateData',
        }
    ]
}