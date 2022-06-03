<template>
  <v-card elevation="3" min-width="30%" max-width="80%" class="skills-card">
    <v-card-title>{{ $t("skills.headline") }}</v-card-title>
    <v-card-text>
      <div class="subheader"><b>{{ $t('skills.subheadline_basics') }}</b></div>
      <div class="skillrow">
        <SkillPoint :name="$t('skills.oop')" percent="80" />
        <SkillPoint :name="$t('skills.db')" percent="70" />
        <SkillPoint :name="$t('skills.do')" percent="40" />
        <SkillPoint :name="$t('skills.pm')" percent="60" />
        <SkillPoint :name="$t('skills.comm')" percent="75" />
        <SkillPoint :name="$t('skills.eng')" percent="60" />
      </div>
      <div class="space"></div>
      <div class="subheader"><b>{{ $t('skills.subheadline_products') }}</b></div>
      <div class="skillrow">
        <SkillPoint name="C#" percent="90" />
        <SkillPoint name=".NET" percent="80" />
        <SkillPoint name="MS SQL" percent="70" />
        <SkillPoint name="Javascript" percent="65" />
        <SkillPoint name="Java" percent="60" />
        <SkillPoint name="ELK-Stack" percent="40" />
        <SkillPoint name="Docker" percent="50" />
        <SkillPoint name="Kubernetes" percent="50" />
        <SkillPoint name="Azure DevOps" percent="70" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import SkillPoint from './SkillPoint.vue'
export default {
  name: 'SkillsPart',
  props: {

  },
  components: {
    SkillPoint
  },
}
</script>

<style scoped>
.subheader {
  margin-bottom: 25px;
}

.space {
  margin-top: 30px;
}

.skillrow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: auto;
}


@media screen and (max-width: 1000px) {
  .skillrow {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .skillrow {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
