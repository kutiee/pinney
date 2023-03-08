<template>
  <Layout class-prefix="layout">
    <Tags/>
    <div class="notes">
      <FormItem field-name="备注"
         placeholder="在这里输入备注"
         @update:value="onUpdateNotes"
  />
    </div>
  
    <Types :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';

 
@Component({
   components: {Tags, FormItem, Types, NumberPad},
  
})
export default class Money extends Vue {
      get recordList() {
      return this.$store.state.recordList;
    }
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    create(){
      this.$store.commit('fetchRecords')
    }
    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }


    saveRecord() {
      this.$store.commit('createRecord',this.record);
    }
  }
</script>

<style lang="scss">
  .layout-content {
   display: flex;
    flex-direction:column-reverse;
  }
  .notes{
    padding: 12px 0;
  }
</style>

