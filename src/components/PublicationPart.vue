<template>
    <v-card elevation="3" min-width="50%" max-width="80%" class="pub-card">
        <v-card-title>{{ $t("publication.headline") }}</v-card-title>
        <v-card-text>

            <BulletPoint :date="$t('publication.lsharp_date')"
                :titel="$t('publication.lsharp_title') + ' ' + $t('publication.lsharp_link')"
                :items="$t('publication.lsharp_text')" />
        </v-card-text>
    </v-card>
</template>

<script>
import BulletPoint from './BulletPoint.vue'
export default {
    name: 'PublicationPart',
    props: {

    },
    components: {
        BulletPoint
    }
}
</script>
<style scoped>
.right-aligned {
    text-align: right;
}
</style>


