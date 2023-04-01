module.exports = {
  routes: [
    {
     method: 'PUT',
     path: '/user-actions/:userid',
     handler: 'user-actions.update'
    },
  ],
};
