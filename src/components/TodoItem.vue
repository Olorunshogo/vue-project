<script>
    export default {
        props: ['itemName']
    }
</script>

<template>
    <div class="pinkBall"></div>
    <div class="pinkBall"></div>
    <li v-bind="$attrs">{{ itemName }}</li>
    
</template>

<style scoped>
    li {
        margin: 0;
        border-radius: 10px;
        padding: 5px 10px;
    }

    .pinkBall {
        display: inline-block;
        background-color: lightpink;
        padding: 5px;
        margin: 2px;
        border-radius: 50%;
    }
</style>