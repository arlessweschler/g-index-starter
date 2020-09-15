<template>
  <v-app-bar light role="navigation" aria-label="main navigation">
    <v-app-bar-nav-icon @click="navclick"></v-app-bar-nav-icon>
    <v-spacer v-if="ismobile"></v-spacer>
    <v-toolbar-title>
      <v-btn text large class="title has-text-weight-bold is-5">
        Zyndex
      </v-btn>
    </v-toolbar-title>
    <v-spacer v-if="!ismobile"></v-spacer>
    <v-btn :icon="ismobile">
      <v-icon>mdi-github</v-icon>{{ ismobile ? '' : 'Github' }}
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data: function(){
    return {
      dark: false,
    }
  },
  methods: {
    gotoGithub(){
      window.open("https://github.com/tks18");
      return;
    },
    navclick(){
      this.$bus.$emit("nav", "navigation");
      this.$state.navdraw.key++;
      this.$state.navdraw.value = true;
    }
  },
  computed: {
    ismobile() {
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if(width > 966){
        return false
      } else {
        return true
      }
    },
  },
}
</script>
