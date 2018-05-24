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
      TaskName:'',
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
      },
      vraag1:[
      ],
      vraag2:[
      ],
      vraag3:[
      ],
      vraag4:[
      ],
      vraag5:[
      ],
      vraag6:[
      ],
      vraag7:[
      ],
      vraag8:[
      ],
      vraag9:[
      ],
      vraag10:[
      ]
    }
  },
  methods:{

   saveNewTask(){this.vraag1.push(
     {memo: this.TaskName});
     this.TaskName='';
  },
  saveNewTask2(){this.vraag2.push(
    {memo: this.TaskName});
    this.TaskName='';
 },
 saveNewTask2(){this.vraag3.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask2(){this.vraag4.push(
  {memo: this.TaskName});
  this.TaskName='';
},


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
