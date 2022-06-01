<template>
  <v-card elevation="3" min-width="30%" max-width="80%" class="skills-card">
    <v-card-title>{{ $t("skills.headline") }}</v-card-title>
    <v-card-text>
      <div class="subheader"><b>Basics</b></div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="subheader"><b>Frameworks & Products</b></div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
      <div class="prog-bar"> Skill: <v-progress-linear value="40" height="25" color="#98A8A4"></v-progress-linear>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SkillsPart',
  props: {

  }
}
</script>

<style scoped>
.prog-bar {
  margin-bottom: 20px;

}
</style>
