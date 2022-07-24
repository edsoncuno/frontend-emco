<template>
    <div class="title">
        {{ msg }}
    </div>
</template>
<script>
export default {
    props: {
        msg: String
    }
}
</script>
<style scoped>
.title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
}
</style>