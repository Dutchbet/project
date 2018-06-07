import modal from './components/modal.vue';
import postroute from './components/postroute.vue';

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.component('modal', modal, {
props: ['index'],});
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
  components: { App,modal,},
  router,
  data() {
    return {
      isModalVisible: false,
      TaskName:'',
      step:1,
      placeholder:'',
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
    savePdf(){
      var vm = this
      var columns = [{title: "1", dataKey: "memo"}];
      var columns2 = [{title: "2", dataKey: "memo"}];
      var doc = new jsPDF('p', 'pt');
      doc.text('JeudghulpFriesland', 20, 20)
      doc.autoTable(columns, vm.vraag1);
      doc.autoTable2(columns, vm.vraag2);
      doc.save('todos.pdf');
    },
  

    itemClicked: function(vraag) {
      this.vraag = vraag.vraag1;
    },
    showModal: function(data) {
      this.placeholder = vraag.vraag1;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    deleteObject1: function(index) {
      this.$delete(this.vraag1, index);
    },
    deleteObject2: function(index) {
      this.$delete(this.vraag2, index);
    },
    deleteObject3: function(index) {
      this.$delete(this.vraag3, index);
    },
    deleteObject4: function(index) {
      this.$delete(this.vraag4, index);
    },
    deleteObject5: function(index) {
      this.$delete(this.vraag5, index);
    },
    deleteObject6: function(index) {
      this.$delete(this.vraag6, index);
    },
    deleteObject7: function(index) {
      this.$delete(this.vraag7, index);
    },
    deleteObject8: function(index) {
      this.$delete(this.vraag8, index);
    },
    deleteObject9: function(index) {
      this.$delete(this.vraag9, index);
    },
    deleteObject10: function(index) {
      this.$delete(this.vraag10, index);
    },
    saveNewTask1(){
      if (this.TaskName) {
        this.vraag1.push(
        {memo: this.TaskName});
        this.TaskName='';
      }
    },
    saveNewTask2(){
      if (this.TaskName) {
        this.vraag2.push(
        {memo: this.TaskName});
        this.TaskName='';
      }
    },
    saveNewTask3(){
      if (this.TaskName) {
        this.vraag3.push(
        {memo: this.TaskName});
        this.TaskName='';
      }
    },
saveNewTask4(){
  if (this.TaskName) {
    this.vraag4.push(
    {memo: this.TaskName});
    this.TaskName='';
  }
},
saveNewTask5(){
  if (this.TaskName) {
    this.vraag5.push(
    {memo: this.TaskName});
    this.TaskName='';
  }
},
saveNewTask6(){
  if (this.TaskName) {
    this.vraag6.push(
    {memo: this.TaskName});
    this.TaskName='';
  }
},
saveNewTask7(){
  if (this.TaskName) {
    this.vraag7.push(
    {memo: this.TaskName});
    this.TaskName='';
  }
},
saveNewTask8(){
  if (this.TaskName) {
    this.vraag8.push(
    {memo: this.TaskName});
    this.TaskName='';
  }
},
saveNewTask9(){
  if (this.TaskName) {
    this.vraag9.push(
    {memo: this.TaskName});
    this.TaskName='';
  }
},
saveNewTask10(){
  if (this.TaskName) {
    this.vraag10.push(
    {memo: this.TaskName});
    this.TaskName='';
  }
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
            var test = collapsible.getElementsByClassName('title_value')[0];
            var wrapper = growDiv.getElementsByClassName('measuringWrapper')[0];
            var title_scrollmenu = document.getElementsByClassName('title_scrollmenu')[0];
            var waarden_bottom = document.getElementsByClassName('waarden-bottom')[0];
            // var navbar = document.getElementsByClassName('navbar')[0];
            var overlay = document.getElementsByClassName('overlay')[0];
            button.addEventListener('click', function() {
                if (growDiv.clientHeight) {
                  growDiv.style.height = 0;
                  test.innerHTML = "";
                  title_scrollmenu.style.background = "";
                  title_scrollmenu.style.padding = "";
                  waarden_bottom.style.bottom = "";
                  overlay.style.opacity = "0";
                  overlay.style.visibility = "hidden";
                }
                else {
                  // navbar.style.zIndex = "1";
                  waarden_bottom.style.bottom = "24%"
                  waarden_bottom.style.zIndex = "999";
                  growDiv.style.zIndex = "999";
                  growDiv.style.height = (wrapper.clientHeight + 20) + "px";
                  growDiv.style.width = "100" + "%";
                  test.innerHTML = "Waarden";
                  title_scrollmenu.style.background = "#FFFFFF";
                  title_scrollmenu.style.padding = "20px 20px 0 20px";
                  // setTimeout(function(){
                    overlay.style.opacity = "1";
                    overlay.style.visibility = "visible";
                  // }, 250);
                }
                button.value = (button.value === 'Waarden' ? 'X' : 'Waarden');

            });
        })(collapsibles[i]);
    }
})();
//
// // Get the container element
// var myDiv = document.getElementById("myDIV");
//
// // Get all buttons with class="btn" inside the container
// var container = myDiv.getElementsByClassName("container");
//
// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < container.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
