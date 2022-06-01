<template>
  <v-card elevation="3" min-width="50%" max-width="80%" class="job-card">
    <v-card-title>{{ $t("jobs.headline") }}</v-card-title>
    <v-card-text>
      <v-timeline align-top dense>
        <v-timeline-item color="#98A8A4" small>
          <v-row class="pt-1">
            <v-col cols="2">
              <strong>{{ $t('jobs.lh_ec.date') }}</strong>
            </v-col>
            <v-col>
              <b>{{ $t('jobs.lh_ec.title') }}</b>
              <div class="text-caption mb-2">
                {{ $t('liebherr') }}
              </div>
            </v-col>
          </v-row>
          <span v-html="$t('jobs.lh_ec.points')"></span>
        </v-timeline-item>
        <v-timeline-item color="#98A8A4" small>
          <v-row class="pt-1">
            <v-col cols="2">
              <strong>{{ $t('jobs.wh_sap.date') }}</strong>
            </v-col>
            <v-col>
              <b>{{ $t('jobs.wh_sap.title') }}</b>
              <div class="text-caption mb-2">
                {{ $t('weishaupt') }}
              </div>
            </v-col>
          </v-row>
          <span v-html="$t('jobs.wh_sap.points')"></span>
        </v-timeline-item>
        <v-timeline-item color="#98A8A4" small>

          <v-row class="pt-1">
            <v-col cols="2">
              <strong>{{ $t('jobs.wh_sys.date') }}</strong>
            </v-col>
            <v-col>
              <b>{{ $t('jobs.wh_sys.title') }}</b>
              <div class="text-caption mb-2">
                {{ $t('weishaupt') }}
              </div>
            </v-col>
          </v-row>
          <span v-html="$t('jobs.wh_sys.points')"></span>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'JobsPart',
  props: {

  }
}
</script>
<style scoped>
.right-aligned {
  text-align: right;
}
</style>
