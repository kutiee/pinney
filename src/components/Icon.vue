<template>
       <svg class="icon">
        <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script lang="ts">
let importAll = (requireContext:__WebpackModuleApi.RequireContext) =>requireContext.keys().forEach(requireContext);
try{
importAll(require.context("../assets/icons",true,/\.svg$/))
}catch(error){
    console.log(error)
}
// import x from "@/assets/icons/label.svg"
// // 引入之后可以开始使用<use>,loader发现有svg，把svg变成一个symbol，然后在所有symbol外套个svg，可以打印出来看到
// import y from "@/assets/icons/money.svg"
// // import z from "@/assets/icons/statistics.svg"
// // import Icon from '@/components/Icon.vue';
// console.log(Icon)
    export default ({
        props:["name"],
        name:'Icon'
    })
</script>

<style lang="scss" scoped>
.icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill:currentColor;
    overflow: hidden;
}

</style>