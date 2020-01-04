import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                message: 'count number.',
                number: 0,
            };
        }
    })
}

export default createStore