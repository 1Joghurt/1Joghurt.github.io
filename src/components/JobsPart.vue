<template>
  <v-card elevation="3" min-width="50%" max-width="80%" class="job-card">
    <v-card-title>{{ $t("jobs.headline") }}</v-card-title>
    <v-card-text>
      <v-timeline align-top dense>
        <v-timeline-item color="#98A8A4" small>
          <BulletPoint :date="$t('jobs.lh_ec.date')" :institution="$t('liebherr')" :titel="$t('jobs.lh_ec.title')"
            :items="$t('jobs.lh_ec.points')" />
        </v-timeline-item>
        <v-timeline-item color="#98A8A4" small>
          <BulletPoint :date="$t('jobs.wh_sap.date')" :institution="$t('weishaupt')" :titel="$t('jobs.wh_sap.title')"
            :items="$t('jobs.wh_sap.points')" />
        </v-timeline-item>
        <v-timeline-item color="#98A8A4" small>
          <BulletPoint :date="$t('jobs.wh_sys.date')" :institution="$t('weishaupt')" :titel="$t('jobs.wh_sys.title')"
            :items="$t('jobs.wh_sys.points')" />
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>

</template>


<script>
import BulletPoint from './BulletPoint.vue'
export default {
  name: 'JobsPart',
  props: {
  },
  components: {
    BulletPoint
  }
}
</script>
<style scoped>
</style>
