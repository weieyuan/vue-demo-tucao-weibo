import Vue from 'vue'
import Router from 'vue-router'
import MainContent from "@/components/MainContent"
import RemarkDetails from "@/components/RemarkDetails"
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
      path: "/RemarkDetails/:id",
      name: "RemarkDetails",
      component: RemarkDetails,
      props: true
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    }
  ]
})
