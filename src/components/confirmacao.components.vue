<template>
  <div class="confirmation">
        <button class="confirmation_return" @click="returnPage">
            <img src="../assets/icon-arrow-chevron.svg" alt="">
            <img src="../assets/icon-loading.svg" width="55" v-if="loading">
        </button>
        <img src="../assets/icon-logo.png" class="confirmation_icon-logo" width="45">
        <img src="../assets/icon-sucesso.png" class="confirmation_icon-sucesso" width="65">
        <h5 class="confirmation_title">Parabéns!</h5>
        <p class="confirmation_subtitle">Sua assinatura foi realizada com sucesso</p>
        <div class="confirmation_details">
            <div class="confirmation_details-plan">
                <img src="../assets/icon-star.png" >
                <div class="confirmation_details-plan-dscp">
                    {{ user.plan.period === 'annually' ?'Anual': 'Mensal'}}  |  {{ plan.description}}
                    <div class="plans_item-prices">
                        <span class="plans_item-price">
                            {{  user.plan.amount }}
                        </span>
                        <span class="plans_item-price-installment">
                            {{(user.plan.installments)}}x  R$ {{ user.plan.installmentValue }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="confirmation_details-user">
                <p class="confirmation_details-user-mail">
                    E-mail
                    <span>{{user.email}}</span>
                </p>
                <p class="confirmation_details-user-cpf">
                    CPF
                    <span>{{user.plan.creditCardCPF}}</span>
                </p>
            </div>
        </div>

        <a href="#" class="confirmation_goplan" @click="goPlans">Gerenciar assinatura</a>
        <button class="confirmation_button btn--primary" @click="goPlans">IR PARA HOME</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            plan: 'GET_CHOOSEN_PLAN',
            user: 'GET_USER',
        }),

    },
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        goPlans() {
            setTimeout(() => {
                this.$router.replace('/');
            }, 1000);
        },
        returnPage() {
            this.loading = !this.loading;
            setTimeout(() => {
                this.$router.replace('/payment');
                this.loading = !this.loading;
            }, 2000);
        },
    },
};
</script>

<style lang="scss">
.confirmation {
    margin: auto;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
      width: 100%;
      padding: 2rem 10px;
    }
    &_return{
        outline: none;
        border: none;
        background: transparent;
        position: absolute;
        top: 1rem;
        left: 2rem;
        height: 44px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    &_icon-logo{
        margin: 2rem;
    }
    &_icon-sucesso{
        margin: 1rem;
    }
    &_title{
        color: #181a44;
    }
    &_subtitle{
        line-height: 20px;
        color: #E0E0E0;
        width: 200px;
    }
    &_details {
        width: 100%;
        margin: auto;
        margin: 1rem 0 2rem;
        padding: .8rem;
        box-shadow: 0px 3px 6px #0000000f;
        border-radius: 10px;
        &-plan {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #f4f3f6;
            padding: 1rem;
            border-radius: 10px;
            &-dscp {
                text-align: right;
                color: #181a44;
                div {
                    font-size: 13px;
                    margin-top: .5rem;
                    span {
                        &:nth-child(2) {
                            &::before {
                                content: '|';
                                font-size: 14px;
                                color:#181a44;
                                margin: 0 3px;

                            }
                        }
                    }
                }
            }
        }
        &-user {
            color: #E0E0E0;
            padding: 1rem 1rem 0 1rem;

            &-mail {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
               span{
                   color: #181a44;
               }
            }
            &-cpf {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                span{
                    color: #181a44;
                }
            }
        }
    }

    &_goplan {
        color: #181a44;
        &:hover {
            color: inherit;
            text-decoration: none;
        }
    }

    &_button {
        margin: auto;
        margin-top: 2rem;
        background: #181a44;
        border-radius: 16px;
        /* height: 40px; */
        padding: 0.5rem;
        font-size: 12px;
        width: 90%;
        color: white;
        outline: none;
        transition: all 0.3s;
        border: none;
        &:hover, &:active, &:focus {
            transition: background .3s, color .3s;
            color: white;
            background: #1d1f46f7;
            outline: none;
            border-color: transparent;
            transition: all 0.3s;
        }
    }
}
</style>
