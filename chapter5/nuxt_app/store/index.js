import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                message: 'count number.',
                counter: 0,
            };
        },
        mutations: {
            count: function (state, n) {
                state.counter += n;
            },
            say: function (state, message) {
                state.message = message;
            },
            reset: function (state) {
                state.counter = 0;
                state.message = 'reset now...';
            }
        },
        actions: {
            doit: function (context) {
                var n = Math.floor(Math.random() * 10);
                context.commit('count', n);
                context.commit('say', 'add ' + n + '!');
            }
        },
        plugins: [
            createPersistedState(),
        ],
    })
}

export default createStore