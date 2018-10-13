import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'
import MainComponent from '@/components/MainComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: MainComponent
    }
  ]
})
