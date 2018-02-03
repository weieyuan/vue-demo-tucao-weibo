import Vue from 'vue'
import Router from 'vue-router'
import MainContent from "@/components/MainContent"
import RemarkDetails from "@/components/RemarkDetails"
import Registry from "@/components/Registry"
import Login from "@/components/Login"
import Test from "@/components/test/Test"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/Registry',
      name: 'Registry',
      component: Registry
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: "/RemarkDetails/:id",
      name: "RemarkDetails",
      component: RemarkDetails,
      props: true
    },
    {
      path: "/Test",
      name: "Test",
      component: Test,
    }
  ]
})
