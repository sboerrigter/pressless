import Vue from 'vue';

let header = new Vue({
  el: '.header',
  data: {
    sitename: 'PressLess',
    menu: ['Home', 'Blog', 'About', 'Contact']
  }
});
