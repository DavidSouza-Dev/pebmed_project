<template>
    <div class="main" >
        <div class="plans">
            <h5 class="plans_title">Confira o seu plano:</h5>
            <p class="plans_mail">{{ user.email }}</p>
            <div v-for="(plan, index) in plans" :key="index" class="plans_item">
                <label
                    :for="plan.description == 'À vista' ? 'a_vista' : plan.description"
                    :data-cy="plan.description"
                >
                    {{ plan.period === 'annually' ? 'Anual': 'Mensal'}}  |  {{ plan.description}}
                    <div class="plans_item-prices">
                        <span class="plans_item-prices-of">
                            De {{ plan.fullPrice}}
                        </span>
                        <span class="plans_item-prices-for">
                            Por {{  plan.priceWithDiscount }}
                        </span>
                        <span class="plans_item-prices-discount">
                            {{plan.discountPercentage}}
                        </span>
                    </div>
                    <div class="plans_item-installment">
                        <span>
                            {{plan.installments}}x de {{plan.installmentsValue}}
                        </span>
                    </div>
                </label>
                <input
                        type="radio"
                        :id="plan.description == 'À vista' ? 'a_vista' : plan.description"
                        :name="plan.description"
                        :value="plan.description"
                        v-model="checked"
                        class="plans_item-radio"
                        @click="handleChoosePlan(plan)"
                        :alt='index'
                    >
                <span></span>
            </div>
            <p class="plans_info">Sobre a cobrança
                <img src="../assets/icon-info.png" width="13" alt="">
            </p>
        </div>
        <notifications group="app" position="top center" closeOnClick/>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'Planos',
    computed: {
        ...mapGetters({
            plans: 'GET_PLAN',
            user: 'GET_USER',
        }),
    },
    data() {
        return {
            checked: null,
        };
    },
    async created() {
        this.$store.dispatch('ACTION_USER', true);
        this.$store.dispatch('FETCH_PLAN', true);
        this.firstMessage();
    },
    methods: {
        firstMessage() {
            setTimeout(() => {
                this.$notify({
                    group: 'app',
                    type: 'warning',
                    title: 'Escolha seu plano',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }, 1000);
        },
        handleChoosePlan(value) {
            this.$store.commit('SET_CHOOSEN_PLAN', value);
            this.$store.commit('SET_PLAN_CHECKOUT', false),
            this.$notify({
                group: 'app',
                type: 'success',
                title: 'Você será redirecionado',
                duration: 2000,
                ignoreDuplicates: true,
            });
            setTimeout(() => {
                this.$router.replace('/payment');
            }, 2000);
        },
    },

};
</script>

<style lang="scss">
    .main {
        padding: 3rem;
        .plans {
            margin: auto;
            width: 300px;
            text-align: left;

            @media (max-width: 600px) {
                width: 100%;
                padding: 2rem 10px;
            }

            &_title {
                font-size: 18px;
            }
            &_mail {
                font-size: 9px;
                border: 1px solid #F5F5F5;
                padding: 2px 5px;
                border-radius: 10px;
                max-width: fit-content;
                margin-bottom: 1.5rem;
                transition: all 0.3s;
                &:hover{
                    border-color: #1d1f46f7;
                    transition: all 0.3s;
                }
            }
            &_item {
                border: 1px solid #181a44;
                border-radius: 16px;
                margin: .7rem 0;
                padding: 1rem;
                display: flex;
                font-size: 12px;
                justify-content: space-between;
                align-items: center;
                position: relative;
                label {
                    font-weight: 700;
                }
                input[type="radio"] {
                    opacity: 0;
                    margin-top: 0px;
                    position: absolute;
                    right: 18px;
                    z-index: 9999;
                    &:checked {
                        & ~ span{
                            height: 8px;
                            width: 8px;
                            border-radius: 50%;
                            background: rgb(24, 26, 68);
                            position: relative;
                            &::before{
                                content: '';
                                position: absolute;
                                top: -3px;
                                right: -3px;
                                bottom: -3px;
                                left: -3px;
                                border: 1px solid #E0E0E0;
                                border-radius: 50%;
                                z-index: 999;
                            }
                        }
                    }
                    & ~ span{
                            height: 8px;
                            width: 8px;
                            border-radius: 50%;
                            background: transparent;
                            position: relative;
                            margin-right: 5px;
                            &::before{
                                content: '';
                                position: absolute;
                                top: -3px;
                                right: -3px;
                                bottom: -3px;
                                left: -3px;
                                border: 1px solid #E0E0E0;
                                border-radius: 50%;
                            }
                        }
                }
                &-prices {
                    font-weight: 400;
                    font-size:11px;
                    &-discount{
                        background: #e78a35;
                        border-radius: 16px;
                        padding: 3px 10px;
                        font-size: 10px;
                        color: white;
                        margin-left: 10px;
                    }
                    &-for {
                        &::before{
                            content: '|';
                            font-size: 12px;
                            color:#181a44;
                            margin: 0 3px;

                        }
                    }
                }
                &-installment {
                    color: #e78a35;
                    font-size: 10px;
                }
            }
            &_info {
                text-align: center;
                font-size: 11px;
                img{
                    margin-bottom: 3px;
                }
            }

        }
    }

</style>
