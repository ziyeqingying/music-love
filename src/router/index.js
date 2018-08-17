import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/m-header'
import MRecommend from '@/components/m-recommend'
import MHot from '@/components/m-hot'
import MSearch from '@/components/m-search'
import MDetail from '@/components/m-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MRecommend',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'MRecommend',
      component: MRecommend
    },
    {
      path: '/hot',
      name: 'MHot',
      component: MHot
    },
    {
      path: '/search',
      name: 'MSearch',
      component: MSearch
    },
    {
      path: '/detail/:id',
      name: 'MDetail',
      component: MDetail
    }
  ]
})
