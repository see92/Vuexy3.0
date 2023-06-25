<template>
  <VDataTable :headers="headers" :items="items" show-select hover="true">
    <template #item.actions="{item}">
      <IconBtn>
        <v-icon icon="tabler-download" />
      </IconBtn>
      <IconBtn>
        <v-icon icon="tabler-share" />
      </IconBtn>
      <MoreBtn :menu-list="computedMoreList(item.raw.id)" item-props color="undefined" />
    </template>
    <template #bottom>
      <VCardText class="pt-2">
        <VRow>
          <VCol lg="2" cols="3">
            <VTextField v-model="options.itemsPerPage" label="每页行数：" type="number" min="-1" max="15" hide-details variant="underlined" />
          </VCol>
          <VCol lg="10" cols="9" class="d-flex justify-end">
            <VPagination v-model="options.page" total-visible="5" :length="Math.ceil(items.length / options.itemsPerPage)" />
          </VCol>
        </VRow>
      </VCardText>
    </template>
  </VDataTable>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

// 表格头部信息
const headers = [
  { title: '名称', key: 'name', sortable: false, align: 'center' },
  // { title: '操作', key: 'actions', sortable: false },
  { title: '大小', key: 'size', sortable: false, align: 'center' },
  { title: '修改时间', key: 'setTime', sortable: false, align: 'center' },
  { title: '操作', key: 'actions', sortable: false, align: 'center', },
]
// 数据表格数据内容
const items = [
  { name: 'WeChatSetup.exe', size: '167.78MB', setTime: '2023-6-25 09:57:03', id: '1687669948861' },
  { name: 'GitHubDesktop.exe', size: '386.78MB', setTime: '2023-6-25 09:57:03', id: '1705889548000' }
]
// 省略号里的内容
const computedMoreList = computed(() => {
  return (paramId) => [
    { title: '标签信息', value: '标签信息', prependIcon: 'tabler-tag' },
    { title: '重命名', value: '重命名', prependIcon: 'tabler-edit' },
    { title: '属性  ', value: '详情信息', prependIcon: 'tabler-info-circle' },

    { title: '删除', value: '删除', prependIcon: 'tabler-trash' }
  ]
});
// 外部分页
const options = reactive({
  page: 1,
  itemsPerPage: 5,
  sortBy: [''],
  sortDesc: [false]
})
// 点击事件
const clickRow = (e, i) => {
  console.log(e, 'eeee', i, 'iiii');
}

</script>
