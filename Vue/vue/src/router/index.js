import Vue from 'vue'
import Router from 'vue-router'
import Excel from '@/components/excel'
import Home from '@/components/Home'
import Tree from '@/components/tree'
import Father from '@/components/father'
import Child from '@/components/child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'excel',
      component: Excel
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/father',
      name: 'father',
      component: Father
    },
    {
      path: '/child',
      name: 'child',
      component: Child
    }
  ]
})
