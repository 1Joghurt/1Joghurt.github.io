<template>
  <v-app>
    <v-app-bar app color="#98A8A4" dark>
      <div class="d-flex align-center header">
        {{ $t("cv") }}
      </div>
      <v-spacer></v-spacer>

      <v-btn @click="changeLanguage('en')" v-if="!isEnglish" text>
        <span>{{
            $t("english")
        }}</span>
      </v-btn>
      <v-btn @click="changeLanguage('de')" v-else text>
        <span>{{ $t("german") }}</span>
      </v-btn>

    </v-app-bar>
    <v-main>
      <AboutMe class="part column1 sticky" />
      <JobsPart class="part" />
      <EducationPart class="part" />
      <PublicationPart class="part" />
      <SkillsPart class="part" />

    </v-main>
  </v-app>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import JobsPart from './components/JobsPart.vue';
import EducationPart from './components/EducationPart.vue';
import SkillsPart from './components/SkillsPart.vue';
import PublicationPart from './components/PublicationPart.vue'

export default {
  name: 'App',
  components: {
    AboutMe,
    JobsPart,
    PublicationPart,
    EducationPart,
    SkillsPart
  },
  methods: {
    changeLanguage(language) {
      this.isEnglish = language == 'en';
      this.$root.$i18n.locale = language;
    }
  },
  data: () => ({
    isEnglish: true,
  }),
};
</script>

<style scoped>
.header {
  size: 22pt
}

.part {
  margin: 20px auto 20px auto;
}
</style>
