<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <v-btn text large class="title has-text-weight-bold is-5">
          Zyndex
        </v-btn>
      </div>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <v-btn text>
            Generate
          </v-btn>
        </div>
        <div class="navbar-item">
          <v-btn text>
            Docs
          </v-btn>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <v-btn text>
            About
          </v-btn>
        </div>
        <div class="navbar-item">
          <v-btn>
            <v-icon>mdi-github</v-icon> Github
          </v-btn>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function(){
    return {
      dark: false,
    }
  },
  methods: {
    themeHandler(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.dark = this.$vuetify.theme.dark;
    },
    gotoGithub(){
      location.href = "https://github.com/tks18";
      return;
    }
  }
}
</script>
