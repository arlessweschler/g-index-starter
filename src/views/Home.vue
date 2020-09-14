<template>
  <div class="content">
    <section class="hero is-light gradient-hero is-medium">
      <div class="hero-body">
        <div v-if="currHerosrc" class="columns is-multiline is-centered is-vcentered">
          <transition name="slide-fade" mode="out-in">
            <div v-bind:key="herokey" class="column grad-text is-half">
              <div class="container">
                <h1 class="title">
                  {{ currHerosrc.title }}
                </h1>
                <h2 class="subtitle">
                  {{ currHerosrc.subtitle }}
                </h2>
                <p class="subtitle">
                  Click the Below to Generate Yours Now
                </p>
                <v-btn>
                  <v-icon>mdi-arrow</v-icon> Create Now!
                </v-btn>
              </div>
            </div>
          </transition>
          <div class="column is-half">
            <figure>
              <img src="https://media.giphy.com/media/RKprmbDQXHFVy4DFyq/giphy-downsized.gif" alt="Main Image"/>
              <figcaption><p><span class="has-text-dark">Image Credits:</span> GIPHY</p> </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <div class="box has-background-light">
      <h2 class="subtitle has-text-centered">Get to Know All the Features</h2>
      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-2">
          <v-btn large color="#f6f7d4">
            <v-icon>mdi-head-lightbulb-outline</v-icon> Features
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large color="#f6f7d4">
            <v-icon>mdi-wan</v-icon> Docs
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large color="#f6f7d4">
            <v-icon>mdi-key-chain-variant</v-icon> Pre-reqs
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large color="#f6f7d4">
            <v-icon>mdi-google-photos</v-icon> Screenshots
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large color="#f6f7d4">
            <v-icon>mdi-lightbulb-outline</v-icon> FAQ's
          </v-btn>
        </div>
      </div>
    </div>
    <div class="box has-background-dark">
      <div class="columns is-multiline is-mobile is-centered is-vcentered">
        <div class="column has-text-right is-half">
          <p class="subtitle has-text-grey">
            Built by<br>
            <span class="has-text-weight-bold has-text-white">Shan.tk 😎😎</span>
          </p>
        </div>
        <div class="column has-text-left is-half">
          <figure class="image is-128x128">
            <img class="is-rounded" src="https://s.gravatar.com/avatar/c0ec2e063895760baa493c36d2d28387?s=400">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { shuffle } from "lodash";
export default {
  data: function(){
    return {
      heroSrc: [
        {
          title: "This is Ultimate Index",
          subtitle: "Designed for Style! Engineered to Last!",
        },
        {
          title: "Built with Overloaded Features",
          subtitle: "Ultimaterific !!",
        },
        {
          title: "Loaded with Super Cool Admin Features.",
          subtitle: "When the Going Gets Tough, The Tough Gets Ultimate.",
        },
      ],
      currHerosrc: {},
      herokey: 0,
    }
  },
  methods: {
  },
  mounted(){
    this.currHerosrc = this.heroSrc[0]
    var shuffled =  shuffle(this.heroSrc)
    setInterval(() => {
      this.currHerosrc = shuffled[this.herokey];
      if(this.herokey == shuffled.length-1){
        this.herokey = 0;
      } else {
        this.herokey++
      }
    }, 7500);
  }
}
</script>
