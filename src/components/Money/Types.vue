<template>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
    export default {
      name: 'Types'
    };
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
        height: 64px;
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