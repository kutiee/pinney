<template>
    <button class="button"
            @click="$emit('click', $event)">
      <slot/>
    </button>
  </template>
  
  <script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    @Component
    export default class Button extends Vue {
    }
  </script>
  
  <style lang="scss" scoped>
    .button {
      background: #CE5777;
      color: #333;
      border-radius: 6px;
      border: none;
      height: 40px;
      padding: 0 16px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
      &-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
      }
    }
  </style>