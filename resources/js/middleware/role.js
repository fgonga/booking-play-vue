import store from '~/store';

/**
 * This is middleware to check the current user role.
 *
 * middleware: 'role:admin,manager',
 */

 export default (to, from, next, roles) => {
  // Grab the user

  getRoles().then((response) => {
    roles = roles.split(',');
    if (response != null) {
      return roles.some((role) => response.includes(role) === true) ? next() : next('/unauthorised');
    }
    next('/unauthorised');
  });
};
async function getRoles() {
  return await store.getters['roles/rule'];
}
