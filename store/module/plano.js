const state = {
    plan: null,
    choosenPlan: null,
    choosenInstallment: null,
};

const getters = {
    GET_PLAN: (state) => state.plan,

    GET_CHOOSEN_PLAN: (state) => state.choosenPlan,
};

const mutations = {
    SET_PLAN: (state, plan) => {
        state.plan = plan;
    },

    SET_CHOOSEN_PLAN: (state, choosenPlan) => {
        state.choosenPlan = choosenPlan;
    },

    SET_CHOOSEN_INSTALLMENT: (state, choosenInstallment) => {
        state.choosenInstallment = choosenInstallment;
    },
};
const actions = {
    FETCH_PLAN: async ({ commit }) => {
        const url = 'https://604b7df6ee7cb900176a23a7.mockapi.io/api/v1/offer';
        await fetch(url)
            .then((res) => res.json())
            .then((resJSON) => {
                commit('SET_PLAN', resJSON.map((e) => ({
                    id: e.id,
                    description: e.description,
                    installments: e.installments, // parcelas
                    discountAmmount: e.discountAmmount, // valor descontado
                    discountCouponCode: e.discountCouponCode, // valido para plano anual
                    discountPercentage: `-${e.discountPercentage === 0.1 ? e.discountPercentage * 100 : e.discountPercentage}%`, // porcentagem
                    fullPrice: `R$ ${e.fullPrice.toFixed(2)}`, // valor De
                    priceWithDiscount: `R$ ${(e.fullPrice - e.discountAmmount).toFixed(2)}`, // valor Para
                    installmentsValue: `R$ ${((e.fullPrice - e.discountAmmount) / e.installments).toFixed(2)}`,
                    valuePrice: e.fullPrice - e.discountAmmount,
                    periodLabel: e.periodLabel,
                    period: e.period,
                    acceptsCoupon: e.acceptsCoupon,
                })));
                commit('SET_CHOOSEN_PLAN', resJSON.map((e) => ({
                    id: e.id,
                    description: e.description,
                    installments: e.installments, // parcelas
                    discountAmmount: e.discountAmmount, // valor descontado
                    discountCouponCode: e.discountCouponCode, // valido para plano anual
                    discountPercentage: `-${e.discountPercentage}%`, // porcentagem
                    fullPrice: `R$ ${e.fullPrice.toFixed(2)}`, // valor De
                    priceWithDiscount: `R$ ${(e.fullPrice - e.discountAmmount).toFixed(2)}`, // valor Para
                    installmentsValue: `R$ ${((e.fullPrice - e.discountAmmount) / e.installments).toFixed(2)}`,
                    valuePrice: e.fullPrice - e.discountAmmount,
                    periodLabel: e.periodLabel,
                    period: e.period,
                    acceptsCoupon: e.acceptsCoupon,
                }))[0]);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
