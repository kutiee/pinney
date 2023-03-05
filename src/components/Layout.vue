<template>
    <div class="layout-wrapper" >
      <div class="content" >
        <slot/>
      </div>
      <Nav/>
    </div>
  </template>
<script lang="ts">
    export default ({
        name:"layout"
    })
</script>

<style lang="scss" scoped>
.layout-wrapper{
    // border:1px solid green;
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
}</style>