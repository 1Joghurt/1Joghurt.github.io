<template>
  <v-card elevation="3" min-width="30%" max-width="80%" class="about-card">
    <v-card-title>Fabian Lorenz</v-card-title>
    <v-card-text>{{ $t("about.text") }}
      <br><br><br>
      <b>Social Media: </b><br>
      <a href="https://github.com/1Joghurt/" target="_blank" class="logo"><img src="../assets/github_logo.png"
          alt="GitHub" width="40px" height="40px" /></a>
      <a href="https://www.xing.com/profile/Fabian_Lorenz19/cv" target="_blank" class="logo"><img
          src="../assets/xing_logo.png" alt="XING" width="40px" height="40px" /></a>
      <a href="https://www.linkedin.com/in/fabian-lorenz-286986185" target="_blank" class="logo"><img
          src="../assets/linkedin_logo.png" alt="LinkedIn" width="40px" height="40px" /></a>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {

  }
}
</script>


<style scoped>
.about-card {
  width: 100%
}

.logo {
  margin: 0 10px 0 10px;
}
</style>
