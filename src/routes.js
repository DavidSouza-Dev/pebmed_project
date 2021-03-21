import planos from './components/planos.components.vue';
import pagamentos from './components/pagamentos.components.vue';
import confirmacao from './components/confirmacao.components.vue';

/* Rotas */

export const routes = [
    { path: '', component: planos },
    { path: '/payment', component: pagamentos },
    { path: '/confirmation', component: confirmacao },
];
