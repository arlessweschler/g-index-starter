<template>
  <div>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-full">
            <div class="container">
              <h4 :class="ismobile ? 'title' : 'subtitle'">
                Zyndex is the Ultimate Destination for Google Drive Index which
                is Easily Deployable and has More Reliable Security Which can be
                Trusted.
              </h4>
              <p>
                <v-btn @click="$vuetify.goTo('#scroll-target')">
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
        <div
          v-if="currHerosrc"
          class="columns is-multiline is-centered is-vcentered"
        >
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
              <img
                src="https://media.giphy.com/media/RKprmbDQXHFVy4DFyq/giphy-downsized.gif"
                alt="Main Image"
              />
              <figcaption class="is-small">
                <span class="has-text-dark">Image Credits:</span>giphy
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <v-container>
      <v-card elevation="10" height="250" class="back-gif">
        <v-row cols="12" align="center" justify="center">
          <v-col cols="12" justify="center">
            <v-row>
              <v-col cols="12" align="center" justify="center">
                <div :class="ismobile ? 'title' : 'subtitle'">
                  Deploy it Right Now by Clicking the Following Button and Get
                  Started with the Instructions.
                </div>
              </v-col>
              <v-col cols="12" align="center" justify="center">
                <v-btn @click="$router.push('/generate')">
                  <v-icon>mdi-check-all</v-icon> Generate Now
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <div class="container" id="scroll-target">
      <h2 class="title">Get to Know About the Project</h2>
      <div
        :class="
          ismobile
            ? 'columns is-multiline is-mobile is-centered is-vcentered has-text-centered'
            : 'columns is-multiline is-mobile is-centered is-vcentered'
        "
      >
        <div
          v-for="(btn, index) in abtBtns"
          v-bind:key="index"
          :class="
            ismobile
              ? index == abtBtns.length - 1
                ? 'column is-full'
                : 'column is-half'
              : 'column is-2'
          "
        >
          <v-btn>
            <v-icon>{{ btn.icon }}</v-icon> {{ btn.btnTxt }}
          </v-btn>
        </div>
      </div>
    </div>
    <v-container class="container mt-3">
      <div class="content">
        <h2 class="title">About the project:</h2>
        <p>
          Zyndex is a Google Drive Index Combining the power of Cloudflare
          Workers and Google Drive which allows you to index your files on the
          browser through Cloudflare Workers. Zyndex Gives you Unmatched Amount
          of Customizations that no One Can Give. With Security as the Main
          Focus, This Gives You Every Thing You need to Manage Users. Complete
          Role Based Authentication and Authorization. Tokenized Download Links
          & Secured Playback can be one of the Prominent Features of this Index.
        </p>
      </div>
    </v-container>
  </div>
</template>
<script>
import { shuffle } from 'lodash';
export default {
  data: function () {
    return {
      heroSrc: [
        {
          title: 'Zyndex',
          subtitle: 'Designed for Style! Engineered to Last!',
        },
        {
          title: 'Built with Overloaded Features',
          subtitle: 'Ultimaterific !!',
        },
        {
          title: 'Loaded with Super Cool Admin Features.',
          subtitle: 'When the Going Gets Tough, The Tough Gets Ultimate.',
        },
        {
          title: 'Massive Customizations',
          subtitle: 'You will get Massive theming Options to Customize',
        },
      ],
      abtBtns: [
        {
          icon: 'mdi-head-lightbulb-outline',
          btnTxt: 'Features',
        },
        {
          icon: 'mdi-wan',
          btnTxt: 'Docs',
        },
        {
          icon: 'mdi-key-chain-variant',
          btnTxt: 'Pre-reqs',
        },
        {
          icon: 'mdi-google-photos',
          btnTxt: 'Shots',
        },
        {
          icon: 'mdi-lightbulb-outline',
          btnTxt: " FAQ's",
        },
      ],
      currHerosrc: {},
      herokey: 0,
    };
  },
  methods: {},
  computed: {
    ismobile() {
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (width > 966) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    this.currHerosrc = this.heroSrc[0];
    var shuffled = shuffle(this.heroSrc);
    setInterval(() => {
      this.currHerosrc = shuffled[this.herokey];
      if (this.herokey == shuffled.length - 1) {
        this.herokey = 0;
      } else {
        this.herokey++;
      }
    }, 7500);
  },
};
</script>
