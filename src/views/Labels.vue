<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
       v-for="tag in tags" :key="tag.id"
      :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '../components/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

  @Component({
    components: {Button},
  })
  export default class Labels extends 
    mixins(TagHelper) {
      get tags() {
      return this.$store.state.tagList;
    }
    beforeCreate() {
      this.$store.commit('fetchTags');
    }
  }
</script>


<style lang="scss" scoped>
  .tags {
    background: #EEB8C3;
    font-size: 16px;
    padding-left: 16px;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #adacac30;
      svg {
        width: 18px;
        height: 18px;
        color: #333;
        margin-right: 16px;
      }
    }
  }
  .createTag {
    background: #CE5777;
    color: #333;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>
