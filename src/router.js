import { createRouter, createWebHistory } from 'vue-router';

import TicketForm from './components/TicketForm.vue';
import TicketConfirm from './components/TicketConfirm.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/form' },
    { path: '/form', component: TicketForm },
    { path: '/confirm', component: TicketConfirm, props: true },

    { path: '/:notFound(.*)', redirect: '/form' },
  ],
});

export default router;
