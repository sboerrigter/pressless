import Vue from 'vue';
import api from './api';

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

Vue.component('posts', {
  template: `
  <section class="posts">
    <article class="post" v-for="post in posts" >
      <img class="post__image" :src="post.image">

      <h2 class="post__title">{{ post.title }}</h2>

      <p class="post__description">{{ post.description }}</p>

      <p>
        <a class="post__link button" :href="post.link" target="_blank">Read more</a>
      </p>
    </article>
  </section>
  `,

  data() {
    return { posts: false };
  },

  mounted() {
    api.getPosts()
      .then((posts) => {
        this.posts = posts;
      });
  },
});

const app = new Vue({
  el: '#app',
});

app();
