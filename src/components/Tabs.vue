<template>
   <ul class="tabs" :class="{[classPrefix+'-tabs']: classPrefix}">
    <li v-for="item in dataSource" :key="item.value" class="tabs-item"
        :class="liClass(item)" @click="select(item)">{{item.text}}
      </li>
    </ul>
  </template>
  
  <script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    type DataSourceItem = { text: string, value: string }
    @Component
    export default class Tabs extends Vue {
      @Prop({required: true, type: Array})
      dataSource!: DataSourceItem[];
      @Prop(String)
      readonly value!: string;
      @Prop(String)
      classPrefix?: string;
      liClass(item: DataSourceItem) {
        return {
          [this.classPrefix + '-tabs-item']: this.classPrefix,
          selected: item.value === this.value
        };
      }
      select(item: DataSourceItem) {
        this.$emit('update:value', item.value);
      }
    }
  </script>
  
  <style lang="scss" scoped>
    .tabs {
      background: #F1C4CD;
      display: flex;
      text-align: center;
      font-size: 18px;
      border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
      .type-tabs-item{
        height: 64px;
      font-size: 24px;
      }
      > li {
        width: 50%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.selected::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #EA7293;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        }
      }
    }
  </style>