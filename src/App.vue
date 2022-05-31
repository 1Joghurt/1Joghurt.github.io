<template>
  <v-app>
    <v-app-bar
      app
      color="#98A8A4"
      dark
    >
      <div class="d-flex align-center header">
        {{ $t("cv") }}
      </div>
      <v-spacer></v-spacer>
      <v-btn
        @click="changeLanguage('de')"
        text
      >
        <span>{{ $t("german") }}</span>
      </v-btn>
      <v-btn
        @click="changeLanguage('en')"
        text
      >
        <span>{{ $t("english") }}</span>
  </v-btn>
    </v-app-bar>
    <v-main>
      <AboutMe/>
      <JobsPart/>
      <EducationPart/>
      <SkillsPart/>
    </v-main>
  </v-app>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import JobsPart from './components/JobsPart.vue';
import EducationPart from './components/EducationPart.vue';
import SkillsPart from './components/SkillsPart.vue';

export default {
  name: 'App',
  components: {
    AboutMe,
    JobsPart,
    EducationPart,
    SkillsPart
  },
  methods: {
    changeLanguage(language) {
        this.$root.$i18n.locale = language;
    }
  },
  data: () => ({
  }),
};
</script>

<style scoped>
.header {
  size: 12pt
}


</style>
