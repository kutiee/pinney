<template>
    <div>
      <label class="formItem">
        <span class="name">{{this.fieldName}}</span>
        <input type="text" 
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="this.placeholder">
      </label>
    </div>
  </template>
  
  <script lang="ts">
  
  import {Component, Prop, Watch} from 'vue-property-decorator';
import Vue from 'vue';
  @Component
    export default class FormItem extends Vue{
      @Prop({default:''})readonly value!:string; 
      @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;
    
      @Watch('value')
      onValueChanged(value:string){
        this.$emit('update:value',value)
      }
    };
  </script>
  
  <style lang="scss" scoped>
    .formItem {
      font-size: 14px;
      padding-left: 16px;
      display: flex;
      align-items: center;
      .name {
        padding-right: 16px;
        color:#CE5777;
      }
      input {
        height: 64px;
        flex-grow: 1;
        background: transparent;
        border: none;
        padding-right: 16px;
        color:#333;
      }
      input::-webkit-input-placeholder{
            color:#E9CCD3;
    }}
  </style>