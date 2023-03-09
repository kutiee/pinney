<template>
    <div>
      <ul class="types">
        <li :class="{selected:value==='-',[classPrefix+'-item']:classPrefix}"
          @click="selectType('-')">支出
      </li>
      <li :class="{selected:value==='+',[classPrefix+'-item']:classPrefix}"
          @click="selectType('+')">收入
      </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue {
    @Prop(String)readonly value!:string;
    @Prop(String)classPrefix?:string;
    // type = '-'; // '-'表示支出，'+'表示收入

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value',type)
    }
  
  }
   
  </script>
  
  <style lang="scss" scoped>
    .types {
      background: #F8BAC9;
      border: 1px solid white;
      display: flex;
      text-align: center;
      font-size: 24px;
      > li {
        width: 50%;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color:#333;
        &.selected::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: #EA7293;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        };
      }
    }
  
  </style>