import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
    ],
});

const app = new Vue({
  el:'#app',
  components: { App },
  router,
  data() {
    return {
      step:1,
      Vragen:{
      vraag1:null,
      vraag2:null,
      vraag3:null,
      vraag4:null,
      vraag5:null,
      vraag6:null,
      vraag7:null,
      vraag8:null,
      vraag9:null,
      vraag10:null,
      }
    }
  },
  methods:{
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      alert('Submit to blah and show blah and etc.');      
    }
  }
});