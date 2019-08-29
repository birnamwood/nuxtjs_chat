// import { firebaseMutations, firebaseAction } from 'vuexfire'
import {vuexfireMutations, firestoreAction } from 'vuexfire';

export const strict = false

export const state = () => ({
  user: null,
  rooms: [],
})

export const mutations = {
  ...vuexfireMutations,
  setUser (state, payload) {
    state.user = payload
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  getRooms: (state) => {
    return state.rooms
  },
}

export const actions = {
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  },
  setRoomsRef: firestoreAction(
    ({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('rooms', ref)
  }),
  saveRoom ({ commit, state }, room) {
    let rooms = state.rooms
    notes.push({ content: room })
    commit('setRooms', rooms)
  },
}