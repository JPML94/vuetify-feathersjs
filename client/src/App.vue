<template>
  <v-app>
    <v-toolbar
      app
    >
    <v-toolbar-title>Tradecraft Admin Panel</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!user">
      <v-btn flat :to="{ name: 'login' }">Go to login</v-btn>
      <v-btn flat :to="{ name: 'signup' }">SignUp</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="user">
      <v-btn flat @click="$router.push('boards')">Gallery</v-btn>
      <v-btn flat @click="$router.push('twobydo')">TwoByDo</v-btn>
      <v-btn flat @click="logout">LogOut</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 - made by JP</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      fixed: false,
    };
  },
  computed: {
    ...mapState('auth', { user: 'payload' }),
  },
  methods: {
    ...mapActions('auth', { authLogout: 'logout' }),
    logout() {
      this.authLogout().then(() => this.$router.push('/login'));
    },
  },
};
</script>
