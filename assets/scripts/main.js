import Vue from 'vue';

Vue.component('navigation', {
  template: `
    <header class="header container" :class="{ 'open': isOpen }">
      <div class="wrapper">
        <a class="logo" href="#">{{ sitename }}</a>

        <div class="hamburger" @click="toggleMenu">
          <div class="hamburger__line"></div>
          <div class="hamburger__line"></div>
          <div class="hamburger__line"></div>
          <div class="hamburger__line"></div>
        </div>

        <nav class="menu">
          <navigation-item class="menu__item" :href="item.link" v-for="item in items">
            {{ item.label }}
          </navigation-item>
        </nav>
      </div>
    </header>
  `,

  data() {
    return {
      sitename: 'PressLess',
      isOpen: false,
      items: [
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
    };
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

Vue.component('navigation-item', {
  template: `
    <a class="menu__item">
      <slot></slot>
    </a>
  `,
});

const app = new Vue({
  el: '#app',
});

app();
