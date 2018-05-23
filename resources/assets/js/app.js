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

    hoi() {
      console.log("hoi")
    },
    prev() {
      this.step--;
    },
    next() {
      console.log("click")
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
