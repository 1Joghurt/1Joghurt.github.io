<template>
    <div class="main">
        <b><span class="date" v-html="date"></span></b>
        <b><span class="titel" v-html="titel"></span></b>
        <span class="institution" v-html="institution"></span>
        <span class="items" v-html="items"></span>
    </div>
</template>

<script>
export default {
    name: 'BulletPoint',
    props: {
        date: { type: String, default: "" },
        institution: { type: String, default: "" },
        titel: { type: String, default: "" },
        items: { type: String, default: "" }
    }
}
</script>

<style scoped>
.main {
    display: grid;
    grid-template-columns: 180px auto;
    grid-template-rows: auto;
}

.date {
    grid-column: 1;
    grid-row: 1 / 3;
}

.titel {
    grid-column: 2;
    grid-row: 1;
}

.institution {
    grid-column: 2;
    grid-row: 2;
    font-weight: 400;
    font-size: 0.75rem !important
}

.items {
    margin-top: 10px;
    grid-column: 1 / 3;
    grid-row: 3;
}

@media screen and (max-width: 800px) {
    .main {
        grid-template-columns: auto;
        grid-template-rows: auto;
    }

    .date {
        grid-column: 1;
        grid-row: 1;
    }

    .titel {
        grid-column: 1;
        grid-row: 2;
    }

    .institution {
        grid-column: 1;
        grid-row: 3;
    }

    .items {
        grid-column: 1;
        grid-row: 4;
    }

}
</style>
