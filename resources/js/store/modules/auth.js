import axios from 'axios';
import * as types from '../mutation-types';

function get (key) {
  return JSON.parse(window.localStorage.getItem(key))
}
function set (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
function remove (key) {
  window.localStorage.removeItem(key)
}
// state
export const state = {
  user: get('user'),
};

// getters
export const getters = {
  user: (state) => state.user,
  check: (state) => state.user !== null,
};

// mutations
export const mutations = {

  [types.FETCH_USER_SUCCESS](state, { user }) {
    state.user = user;
    set('user',user)
  },

  [types.FETCH_USER_FAILURE](state) {
    state.user = null;
    set('user',null)
  },

  [types.LOGOUT](state) {
    state.user = null;
    set('user',null)
  },
};

// actions
export const actions = {
  async fetchUser({ commit }) {
    try {
      const { data } = await axios.get('/api/user');
      commit(types.FETCH_USER_SUCCESS, { user: data });
    } catch (e) {
      commit(types.FETCH_USER_FAILURE);
    }
  },
  updateUser({ commit }, data) {

    commit(types.FETCH_USER_SUCCESS, { user: data });
  },
  async logout({ commit }) {
    try {
      await axios.post('/api/logout');
    } catch (e) { }
    commit(types.LOGOUT);
  },
};
