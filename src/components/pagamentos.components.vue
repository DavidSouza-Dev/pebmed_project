<template>
  <div data-cy="find-test" class="main">
    <button class="main_return" @click="returnPage">
        <img src="../assets/icon-arrow-chevron.svg" alt="">
        <img src="../assets/icon-loading.svg" width="55" v-if="loading">
    </button>
    <div>
      <form
        action="#"
        class="user_payment"
        @submit.stop.prevent="validateBeforeSubmit()"
      >
        <h5 class="user_payment__title">Estamos quase lá!</h5>
        <p class="user_payment__subtitle">
          Insira seus dados de pagamento abaixo:
        </p>
        <img src="../assets/icon-pagamentos-info.png" width="220" />
        <div class="user_payment__form--row">
          <label for="numberCard">Número do cartão</label>
          <input
            class="user_payment__form--numberCard 0"
            type="text"
            name="numberCard"
            v-model="numberCard"
            v-mask="'#### #### #### ####'"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div class="user_payment__form--row">
          <label for="validade">Validade</label>
          <input
            class="user_payment__form--validade 0"
            type="text"
            name="validade"
            v-model="validate"
            v-mask="'##/##'"
            placeholder="MM/AA"
          />
        </div>
        <div class="user_payment__form--row">
          <label for="cvv">CVV</label>
          <input
            class="user_payment__form--cvv 0"
            type="text"
            name="cvv"
            v-mask="'###'"
            v-model="cvv"
            placeholder="000"
          />
        </div>
        <div class="user_payment__form--row">
          <label for="nameCard">Nome impresso no cartão</label>
          <input
            class="user_payment__form--nameCard 0"
            type="text"
            name="nameCard"
            v-model="nameCard"
            placeholder="Seu nome"
          />
        </div>
        <div class="user_payment__form--row">
          <label for="CPF">CPF</label>
          <input
            class="user_payment__form--cpf a 0"
            type="text"
            name="cpf"
            v-model="cpf"
            v-mask="'###.###.###-##'"
            placeholder="000.000.000-00"
          />
        </div>
        <div class="user_payment__form--row">
          <label for="cupom">Cupom</label>
          <input
            class="user_payment__form--cupom 0"
            type="text"
            name="cupom"
            v-model="cupom"
            placeholder="Insira aqui"
            :disabled="!disabled"
          />
        </div>
        <div class="user_payment__form--row">
          <label for="cupom">Número de parcelas</label>
          <select
            v-model="installment"
            v-if="planChoosen.installments === 12"
            @change="setInstallment"
          >
            <option selected disabled hidden value="">Escolha um item</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select v-model="installment" v-else @change="setInstallment">
            <option selected disabled hidden value="">Escolha um item</option>
            <option value="1">1</option>
          </select>
        </div>

        <button
          class="user_payment__form--button btn btn--primary"
          type="submit"
          @click.stop.prevent="validateBeforeSubmit()"
        >
          Finalizar pagamento
        </button>
      </form>
    </div>
    <notifications group="app" position="bottom right" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            numberCard: null,
            nameCard: null,
            validate: null,
            cpf: null,
            cvv: null,
            cupom: null,
            installment: 'Selecionar',
            disabled: false,
            cartoes: {
                Visa: /^4\d{12}(\d{3})?$/,
                Mastercard: /^(5[1-5]\d{4}|677189)\d{10}$/,
                Amex: /^3[47]\d{13}$/,
                DinersClub: /^3(0[0-5]|[68]\d)\d{11}$/,
                Elo: /^(40117[8-9]|431274|438935|451416|457393|45763[1-2]|506(699|7[0-6][0-9]|77[0-8])|509\d{3}|504175|627780|636297|636368|65003[1-3]|6500(3[5-9]|4[0-9]|5[0-1])|6504(0[5-9]|[1-3][0-9])|650(4[8-9][0-9]|5[0-2][0-9]|53[0-8])|6505(4[1-9]|[5-8][0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|[6-7][0-9])|6550([0-1][0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
            },
            loading: false,
        };
    },
    computed: {
        ...mapGetters({
            planChoosen: 'GET_CHOOSEN_PLAN',
            user: 'GET_USER',
        }),
    },
    created() {
        this.disabled = !!this.planChoosen.acceptsCoupon;
    },
    methods: {
        returnPage() {
            this.loading = !this.loading;
            setTimeout(() => {
                this.$router.replace('/');
                this.loading = !this.loading;
            }, 2000);
        },
        setInstallment() {
            this.$store.commit('SET_CHOOSEN_INSTALLMENT', this.installment);
        },
        async validateBeforeSubmit() {
            if (
                this.numberCard === null &&
                this.nameCard == null &&
                this.validate == null &&
                this.cvv == null &&
                this.cpf == null &&
                this.installment == 'Selecionar'
                ) {
                return this.$notify({
                    group: 'app',
                    type: 'error',
                    title: 'Preencha os campos para finalizar',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }
            
            if (this.numberCard === null) {
                return this.$notify({
                    group: 'app',
                    type: 'error',
                    title: 'Preencha o campo de cartão',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }
            if ((this.numberCard.split(' ').join('').length < 16) && !!this.validateCard(this.numberCard.split(' ').join(''))) {
                return this.$notify({
                    group: 'app',
                    type: 'error',
                    title: 'Número de cartão inválido',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }
            if (!this.nameCard) {
                return this.$notify({
                    group: 'app',
                    type: 'error',
                    title: 'Nome de cartão inválido',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }
            if (!this.validate) {
                return this.$notify({
                    group: 'app',
                    type: 'error',
                    title: 'Validade inválida',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }
            if (this.cvv.length < 3) {
                return this.$notify({
                    group: 'app',
                    type: 'error',
                    title: 'CVV inválida',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }
            if (!this.isValidCPF(this.rewrite(this.cpf))) {
                return this.$notify({
                    group: 'app',
                    type: 'error',
                    title: 'CPF inválido',
                    duration: 2000,
                    ignoreDuplicates: true,
                });
            }

            this.handleFinishPayment();
            return true;
        },
        async handleFinishPayment() {
            const url = 'https://604b7df6ee7cb900176a23a7.mockapi.io/api/v1/subscription';

            const obj = JSON.stringify({
                userId: this.user.userId,
                offerId: this.planChoosen.id, // setar um store para isso
                creditCardNumber: this.numberCard.split(' ').join(''),
                creditCardExpirationDate: this.validate,
                creditCardHolder: this.nameCard,
                creditCardCVV: this.cvv,
                creditCardCPF: this.cpf.replace(/[\s.-]*/gim, ''),
                gateway: 'iugu',
                installments: Number(this.installment), // setar um store para isso
                couponCode: this.cupom,
            });

            this.$store.commit('SET_USER_PLAN', {
                description: this.planChoosen.description,
                period: this.planChoosen.period,
                amount: this.planChoosen.priceWithDiscount,
                offerId: this.planChoosen.id, // setar um store para isso
                creditCardNumber: this.numberCard.split(' ').join(''),
                creditCardExpirationDate: this.validate,
                creditCardHolder: this.nameCard,
                creditCardCVV: this.cvv,
                creditCardCPF: this.cpf,
                installments: Number(this.installment), // setar um store para isso
                valuePrice: Number(this.planChoosen.valuePrice),
                // eslint-disable-next-line max-len
                installmentValue: (
                    Number(this.planChoosen.valuePrice) / Number(this.installment)
                ).toFixed(2),
                couponCode: this.cupom,
            });

            await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: obj,
            });
            this.$notify({
                group: 'app',
                title: 'Aguarde.',
                duration: 2000,
                ignoreDuplicates: true,
            });
            setTimeout(() => {
                this.$router.replace('/confirmation');
            }, 2000);
        },
        validateCard() {
            // https://www.creditcardvalidator.org/generator
            let nr = this.numberCard.split(' ').join('');
            let cartoes = Object.entries(this.cartoes)
            for (let i=0; i < cartoes.length; i++){
                if (nr) {
                    if (nr.match(cartoes[i][1])) {
                        return true
                    }
                }
            }
            return false
        },
        rewrite(str) {
            if (!str) return;

            // eslint-disable-next-line consistent-return
            return str
                .trim()
                .replace(/(\s|_)+/, '')
                .replace(/(^-+|-+$)/, '')
                .replace(/[^a-z0-9]+/g, '');
        },
        isValidCPF(cpf) {
            if (typeof cpf !== 'string') return false;
            cpf = cpf.replace(/[\s.-]*/gim, '');
            if (
                !cpf
        || cpf.length !== 11
        || cpf === '00000000000'
        || cpf === '11111111111'
        || cpf === '22222222222'
        || cpf === '33333333333'
        || cpf === '44444444444'
        || cpf === '55555555555'
        || cpf === '66666666666'
        || cpf === '77777777777'
        || cpf === '88888888888'
        || cpf === '99999999999'
            ) {
                return false;
            }
            let soma = 0;
            let resto;
            for (let i = 1; i <= 9; i += 1) {
                soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
            }
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(cpf.substring(9, 10), 10)) return false;
            soma = 0;
            for (let i = 1; i <= 10; i += 1) {
                soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
            }
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(cpf.substring(10, 11), 10)) return false;
            return true;
        },

    },
};
</script>

<style lang="scss">
.main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    @media (max-width: 600px) {
        width: 100%;
        padding: 4rem 10px;
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
    .user_payment {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 290px;
        @media (max-width: 600px) {
            width: 90%;
            margin: auto;
        }
        &__title {
            text-align: left;
        }
        &__subtitle {
            text-align: left;
        }
        img {
            margin: 0.8rem 0;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
        &__form {
            &--row {
                text-align: left;
                margin-bottom: 1rem;
                width: 100%;
                &:nth-child(5) {
                    width: 43%;
                }
                &:nth-child(6) {
                    width: 43%;
                }
                &:nth-child(10) {
                    display: flex;
                    flex-direction: column;
                }
                label {
                    font-size: 11px;
                }
                select {
                    background-color: #ffffff;
                    border: 1px solid transparent;
                    border-bottom: 1px solid #f5f5f5;
                    color: #2e2e2e;
                    padding: 0;
                    transition: all 0.4s;
                    border-radius: 0;
                    outline: none;
                padding: 0.5rem 0;
                }
            }
            &--button {
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
                &:hover, &:active, &:focus {
                    transition: all 0.3s;
                    color: white;
                    background: #1d1f46f7;
                    outline: none;
                    border-color: transparent;
                }
            }
        }
    }
}
</style>
