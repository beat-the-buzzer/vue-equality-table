import Vue from 'vue';
import Router from 'vue-router';
import EqualityTable from '@/pages/EqualityTable/EqualityTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EqualityTable',
      component: EqualityTable
    }
  ],
});
