import Vue from 'vue'
import Router from 'vue-router'
import OpenSeadragon from '@/components/OpenSeadragon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OpenSeadragon',
      component: OpenSeadragon
    }
  ]
})
