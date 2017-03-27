<template src="./template.html"></template>
<script src="./scripts.js"></script>
<style lang="sass" scoped>

    @import 'spinner';
    .infinite-loading-container{
        clear: both;
        text-align: center;
    *[class^=loading-]{
        $size: 28px;
        display: inline-block;
        margin: 15px 0;
        width: $size;
        height: $size;
        font-size: $size;
        line-height: $size;
        border-radius: 50%;
    }
    }
    .infinite-status-prompt{
        color: #666;
        font-size: 14px;
        text-align: center;
        padding: 10px 0;
    }

</style>
