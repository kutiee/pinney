<template>
  <Layout class-prefix="layout">
    <Tags @update:value="record.tags=$event"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="请在这里输入备注哦"
                @update:value="onUpdateNotes"
  />
    </div>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"
          class-prefix="type" />
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
 import recordTypeList from '@/constants/recordTypeList';

 
@Component({
   components: {Tabs, Tags,FormItem, NumberPad},
  
})
export default class Money extends Vue {
      get recordList() {
      return this.$store.state.recordList;
    }

    recordTypeList=recordTypeList

    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    create(){
      this.$store.commit('fetchRecords')
    }
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }


    saveRecord() {
      if(!this.record.tags || this.record.tags.length ===0){
        window.alert('请至少选择一个标签哦')
      }
      this.$store.commit('createRecord',this.record);
    }
  }
</script>

<style lang="scss" scoped>
   ::v-deep.layout-content {
   display: flex;
    flex-direction:column-reverse;
  }
  .notes{
    padding: 12px 0;
  }
</style>

