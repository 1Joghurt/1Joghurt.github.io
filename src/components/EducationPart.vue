<template>
  <v-card elevation="3" min-width="50%" max-width="80%" class="edu-card">
    <v-card-title>{{ $t("education.headline") }}</v-card-title>
    <v-card-text>
      <v-timeline align-top dense>
        <v-timeline-item color="#98A8A4" small>
          <BulletPoint :date="$t('education.bachelor.date')"
            :institution="$t('iu') + '<br>' + $t('education.bachelor.degree')" :titel="$t('education.bachelor.title')"
            :items="$t('education.bachelor.points')" />
        </v-timeline-item>
        <v-timeline-item color="#98A8A4" small>
          <BulletPoint :date="$t('education.jobtraining.date')"
            :institution="$t('weishaupt') + '<br>' + $t('education.jobtraining.degree')"
            :titel="$t('education.jobtraining.title')" :items="$t('education.jobtraining.points')" />
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import BulletPoint from './BulletPoint.vue'
export default {
  name: 'EducationPart',
  props: {
  },
  components: {
    BulletPoint
  }
}
</script>
<style scoped>
</style>
