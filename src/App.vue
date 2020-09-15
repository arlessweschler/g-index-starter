<template>
  <div id="app has-navbar-fixed-top">
    <v-app>
      <NavDrawer />
      <Navbar />
      <v-main>
        <router-view></router-view>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Navbar from "./views/components/navbar";
import NavDrawer from "./views/components/navigation-bar";
import Footer from "./views/components/footer";
export default {
  components: {
    Navbar,
    Footer,
    NavDrawer
  }
}
</script>
