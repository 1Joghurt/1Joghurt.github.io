<template>
    <div class="main">
        <img class="image" v-if="image" :src="'../assets/' + image + '.png'" width="40px" height="40px" />

        <v-progress-linear :value="percent" height="20" color="#98A8A4">
        </v-progress-linear>
        <div class="name"> {{ name }} </div>
    </div>
</template>

<script>
export default {
    name: 'SkillPoint',
    props: {
        name: { type: String, default: "" },
        image: { type: String, default: "" },
        percent: { type: String, default: "" },
    }
    , computed: {
        image_path() {
            return '../assets/' + this.image + '.png';
        }
    }
}
</script>
<style scoped>
.main {
    margin: 0px 20px 20px 20px;
}

.image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
}

.name {
    margin-top: 5px;
    text-align: center;
}

@media screen and (max-width: 800px) {}
</style>
