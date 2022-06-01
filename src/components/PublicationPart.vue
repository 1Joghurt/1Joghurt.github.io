<template>
    <v-card elevation="3" min-width="50%" max-width="80%" class="pub-card">
        <v-card-title>{{ $t("publication.headline") }}</v-card-title>
        <v-card-text>
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong>{{ $t("publication.lsharp_date") }}</strong>
                </v-col>
                <v-col>
                    <b>{{ $t("publication.lsharp_title") }}</b>
                    <div class="text-caption mb-2">
                        <a href="https://arxiv.org/abs/2205.07985" target="_blank">[PDF]</a>

                    </div>
                </v-col>
            </v-row>
            {{ $t("publication.lsharp_text") }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'PublicationPart',
    props: {

    }
}
</script>
<style scoped>
.right-aligned {
    text-align: right;
}
</style>