<template>
  <div class="nav-wrapper">
    <div class="content">Money.vue</div>
    <Nav />
    </div>
</template>

<script lang="ts">
import Nav from "@/components/Nav.vue"
import { component } from 'vue/types/umd'
export default {
name:"Money",
components:{Nav}
}
</script >
<style lang="scss" scoped>
.nav-wrapper{
    border:1px solid green;
    display:flex;
    flex-direction: column;
    height: 100vh;
    // 如果设置min-height的话，content东西太多会被顶下来，因为是flex布局
}
.content{
    flex-grow: 1;
    // 全部占满，但是出现滚动条，是因为body默认有margin
    overflow: auto;
    // 如果东西太多，出现滚动条，但不影响nav
}


</style>