import planos from './pages/planos.pages.vue';
import pagamentos from './pages/pagamentos.pages.vue';
import confirmacao from './pages/confirmacao.pages.vue';

/* Rotas */

export const routes = [
    { path: '', component: planos },
    { path: '/payment', component: pagamentos },
    { path: '/confirmation', component: confirmacao },
];
