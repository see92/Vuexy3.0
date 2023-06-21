<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const list = reactive([
  {
    title: "发送文件",
    value: "1",
  },
  {
    title: "收集文件",
    value: "2",
  },
  {
    title: "中转文件",
    value: "3",
  },
]);
const router = useRouter();
const menuClick = (item) => {
  console.log(item.value);
  if (item.value == 1) {
    router.push({ name: "second-page" });
  }
};
</script>
<template>
  <VMenu>
    <template #activator="{ props }">
      <VBtn color="primary" v-bind="props">
        <VIcon size="20" icon="tabler-plus" />
        <span>新建</span>
      </VBtn>
    </template>

    <VList>
      <VListItem v-for="item in list" :key="item.value" :value="item.value" @click="menuClick(item)">
        <VListItemTitle>{{ item.title }}</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>
