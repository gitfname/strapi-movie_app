module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/top-ten/:collectionName',
     handler: 'top-ten.getTopTen'
    },
  ],
};
