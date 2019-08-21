import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import Cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
    },
    getters:{
    },
    mutations,
    actions,
    modules: {
        Cart
    }
})
