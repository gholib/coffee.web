import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import moduleAuth from './auth/moduleAuth.js'
import menu from './menu'
import importType from './import'
Vue.use(Vuex)


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
        menu,
        importType
    },
    // strict: process.env.NODE_ENV !== 'production'
})
