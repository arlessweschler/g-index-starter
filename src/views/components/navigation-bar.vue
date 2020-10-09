<template>
  <v-navigation-drawer app absolute temporary v-model="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <h1 class="subtitle has-text-weight-bold is-large">Zyndex</h1>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in list"
        v-bind:key="index"
        @click="$router.push(item.link)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: function () {
    return {
      drawer: false,
      list: [
        {
          icon: 'mdi-home',
          text: 'Home',
          link: '/',
        },
        {
          icon: 'mdi-lead-pencil',
          text: 'Generate',
          link: '/generate',
        },
        {
          icon: 'mdi-text-box-multiple-outline',
          text: 'Docs',
        },
        {
          icon: 'mdi-information',
          text: 'About',
        },
      ],
    };
  },
  methods: {
    getItem() {
      console.log('pressed');
    },
  },
  mounted() {
    this.$bus.$on('nav', () => {
      if (this.$state.navdraw) {
        this.drawer = true;
      } else {
        this.drawer = false;
      }
    });
  },
};
</script>
