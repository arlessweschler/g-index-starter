<template>
  <div class="content">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-full">
            <div class="container">
              <h2 class="subtitle">
                Skechiest is the Ultimate Destination for Google Drive Index which is Easily Deployable and has More Reliable Security Which can be Trusted.
              </h2>
              <p>
                <v-btn medium href="#scroll-target">
                  <v-icon>mdi-book-open-outline</v-icon>
                  Read More
                </v-btn>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero gradient-hero is-small">
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
              </div>
            </div>
          </transition>
          <div class="column is-half">
            <figure>
              <img src="https://media.giphy.com/media/RKprmbDQXHFVy4DFyq/giphy-downsized.gif" alt="Main Image"/>
              <figcaption><span class="has-text-dark">Image Credits:</span> GIPHY</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <div class="container back-gif">
      <div class="columns is-multiline has-text-centered is-centered is-vcentered">
        <div class="column is-half">
          <h2 class="title">
            Deploy it Right Now by Clicking the Following Button and Get Started with the Instructions.
          </h2>
          <v-btn large>
            <v-icon>mdi-check-all</v-icon> Generate Now
          </v-btn>
        </div>
      </div>
    </div>
    <div class="container" id="scroll-target">
      <h2 class="title">Get to Know About the Project</h2>
      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-2">
          <v-btn large>
            <v-icon>mdi-head-lightbulb-outline</v-icon> Features
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large>
            <v-icon>mdi-wan</v-icon> Docs
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large>
            <v-icon>mdi-key-chain-variant</v-icon> Pre-reqs
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large>
            <v-icon>mdi-google-photos</v-icon> Screenshots
          </v-btn>
        </div>
        <div class="column is-2">
          <v-btn large>
            <v-icon>mdi-lightbulb-outline</v-icon> FAQ's
          </v-btn>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <h2 class="title">
          About the project:
        </h2>
        <p>
          Skechiest is a Google Drive Index Combining the power of Cloudflare Workers and Google Drive which allows you to index your files on the browser through Cloudflare Workers. Skechiest Gives you Unmatched Amount of Customizations that no One Can Give. With Security as the Main Focus, This Gives You Every Thing You need to Manage Users. Complete Role Based Authentication and Authorization. Tokenized Download Links & Secured Playback can be one of the Prominent Features of this Index.
        </p>
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
          title: "Skechiest",
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
        {
          title: "Massive Customizations",
          subtitle: "You will get Massive theming Options to Customize",
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
