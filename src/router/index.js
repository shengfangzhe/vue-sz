import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tbHeading from '../renderTest/tb-heading'
import parent from '../renderTest/parent.vue'
import useSlot from '../slotLearn/useSlot.vue'
import userSetting from '../routerDemo/userSetting.vue'
import userEmail from '../routerDemo/userEmail.vue'
import userProfile from '../routerDemo/userProfile.vue'
import userPreview from '../routerDemo/userPreview.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/parent',
    name: 'parent',
    component: parent
  }, {
    path: '/slotScope',
    name: 'slotScope',
    component: useSlot
  }, {
    path: '/setting',
    component: userSetting,
    children: [{
      path: 'emails',
      component: userEmail
    }, {
      path: 'profile/:id',
      name:'profile',
      components: {
        default: userProfile,
        helper: userPreview
      },
      props:{default:true,helper:true}
    }]
  }]
})
