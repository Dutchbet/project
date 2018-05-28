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
 saveNewTask3(){this.vraag3.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask4(){this.vraag4.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask5(){this.vraag5.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask6(){this.vraag6.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask7(){this.vraag7.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask8(){this.vraag8.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask9(){this.vraag9.push(
  {memo: this.TaskName});
  this.TaskName='';
},
saveNewTask10(){this.vraag10.push(
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


(function() {
    var i, len, collapsibles = document.getElementsByClassName('collapsible');
    for (i = 0, len = collapsibles.length; i < len; i++) {
        (function(collapsible) {
            var button = collapsible.getElementsByClassName('more-button')[0];
            var growDiv = collapsible.getElementsByClassName('growable')[0];
            var wrapper = growDiv.getElementsByClassName('measuringWrapper')[0];
            button.addEventListener('click', function() {
                if (growDiv.clientHeight) {
                  growDiv.style.height = 0;
                }
                else {
                  growDiv.style.height = wrapper.clientHeight + "px";
                }
                button.value = (button.value === 'Waarden' ? 'Waarden' : 'Read more');
            });
        })(collapsibles[i]);
    }
})();
