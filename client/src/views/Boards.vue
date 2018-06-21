<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center wrap>
        <v-progress-circular
          v-if="loading"
          :size="50"
          :width="5"
          indeterminate
          color="primary"
          class="center-item"
        ></v-progress-circular>
        <v-flex
          v-if="!loading"
          v-for="contact in contacts"
          :id="contact._id"
          :key="contact._id"
          v-model="currentContact"
          sm3
          pa-2>
          <v-card>
            <v-card-media
               class="card-media"
               height="300px"
               :src="contact.headshot.value"
             ></v-card-media>

            <v-card-title primary-title>
              <div class="headline">{{ contact.firstname.value }} {{ contact.lastname.value }}</div>
            </v-card-title>
            <v-card-text>
              <div class="content"><strong>Cohort: </strong> {{ contact.program_info.cohort.value }}</div>
              <div class="content"><strong>Track:</strong> {{ contact.program_info.track.value }}</div>
              <div class="bio">
                <strong>MBTI Type:</strong> {{ contact.personal_info.mbti.value }}
                <br />
                <strong>Lead Source:</strong> {{ contact.program_info.lead_source.value }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click.stop:="dialog = true"
                dark color="primary"
                v-model="picked"
              >Show More</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-dialog v-model="dialog"  transition="dialog-bottom-transition" width="50%">
          <v-card>
            <v-toolbar dark class="primary">
              <v-btn icon @click.native="dialog = false" dark>
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Zach Dierberg
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <img class="headshot" src="https://dl.airtable.com/qbPrl2OaSJmh2i792jo2_IMG_8643.JPG"/>
            <v-card-title primary-title>
              <div>
                <div>TC54</div>
                <div>Product Design</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn @click="goToMail" flat class="orange--text">Email</v-btn>
              <v-btn @click="goToHB" flat class="orange--text">Go to HubSpot</v-btn>
              <v-btn icon @click.native="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="!show">
                <div><strong>Lead Source:</strong>
                  Nick Khlytin, a prospective student,
                  suggested it and I reached out to former instructor,
                  Joe Robinson, to learn more</div>
                <br />
                <div> <strong>Bay Area Address:</strong>
                  840 22nd St
                  San Francisco, CA
                  94107
                </div>
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'boards',
  data() {
    return {
      bottom: false,
      dialog: false,
      show: false,
      picked: null,
      currentContact: '',
      contact: {
        email: '',
      },
    };
  },
  mounted() {
    this.findContacts({ query: {'lifecycle_stage.value': 'customer'}})
      .then((response) => {
      const contacts = response.data || response;
      console.log(contacts);
    });
  },
  computed: {
    ...mapState('contacts', {
      loading: 'isFindPending',
      creating: 'isCreatePending',
    }),
    ...mapGetters('contacts', { findContactsInStore: 'find' }),
    contacts() {
      return this.findContactsInStore({ query: {} }).data;
    },
  },
  methods: {
    ...mapActions('contacts', { findContacts: 'find' }),
    goToHB: () => {picked: '',
      window.open(
        'https://app.hubspot.com/contacts/2497675/contact/105951/',
        '_blank', // <- This is what makes it open in a new window.
      );
    },
    goToMail: () => {
      window.open('mailto:zdierberg@tradecrafted.com');
    },
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addContact() {
      console.log('this ran')
      // return this.findContacts({ query: {$skip: 20}})
      //   .then((response) => {
      //     const contacts = response.data || response;
      //     console.log(contacts);
      //   })
    },
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addContact();
      }
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });
    this.addContact();
  },
};
</script>

<style>

.center-item {
  display: inline-block;
  height:50%;
  position: absolute;
  top: 0;
  bottom:0%;
  left: 0;
  right: 0%;
  margin: auto;

}

.headshot {
  height: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
