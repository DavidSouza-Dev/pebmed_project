const state = {
    user: {
        email: null,
        firstName: null,
        userId: null,
        plan: null,
    },
};

const getters = {
    GET_USER: (state) => state.user,

    GET_USER_PLAN: (state) => state.user.plan,
};

const mutations = {
    SET_USER: (state, user) => {
        state.user = user;
    },
    SET_USER_PLAN: (state, plan) => {
        state.user.plan = plan;
    },
};

const actions = {
    ACTION_USER: ({ commit }) => {
        commit('SET_USER', {
            email: 'david.souza@mail.com',
            firstName: 'David',
            userId: 222,
        });
    },
};

export default {
    state, getters, mutations, actions,
};
