import Vue from 'vue';

new Vue({
  el: '.header',
  data: {
    sitename: 'PressLess',
    isOpen: false,
    menu: [
      {
        label: 'Home',
        link: '#',
      },
      {
        label: 'Blog',
        link: '#',
      },
      {
        label: 'About',
        link: '#',
      },
      {
        label: 'Contact',
        link: '#',
      },
    ],
  },
  methods: {
    toggleMenu() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
  },
});
