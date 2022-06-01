<template>
  <v-card elevation="3" min-width="30%" max-width="80%" class="edu-card">
    <v-card-title>{{ $t("education.headline") }}</v-card-title>
    <v-card-text>

      <v-timeline align-top dense>
        <v-timeline-item color="#98A8A4" small>
          <v-row class="pt-1">
            <v-col cols="2">
              <strong>{{ $t('education.bachelor.date') }}</strong>
            </v-col>
            <v-col>
              <b><span v-html="$t('education.bachelor.title')"></span></b>
              <div class="text-caption mb-2">
                {{ $t('iu') }}<br>
                {{ $t('education.bachelor.degree') }}<br>
              </div>
            </v-col>
          </v-row>
          <span v-html="$t('education.bachelor.points')"></span>
        </v-timeline-item>
        <v-timeline-item color="#98A8A4" small>
          <v-row class="pt-1">
            <v-col cols="2">
              <strong>{{ $t('education.jobtraining.date') }}</strong>
            </v-col>
            <v-col>
              <b>{{ $t('education.jobtraining.title') }}</b>
              <div class="text-caption mb-2">
                {{ $t('weishaupt') }}<br>
                {{ $t('education.jobtraining.degree') }}<br>
              </div>
            </v-col>
          </v-row>
          <span v-html="$t('education.jobtraining.points')"></span>
        </v-timeline-item>


      </v-timeline>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'EducationPart',
  props: {

  }
}
</script>


<style scoped>
</style>
