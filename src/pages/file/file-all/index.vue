<template>
  <v-card>
    <v-card-item class="py-3 px-5">
      <div>
        <v-icon icon="tabler-files" />
        <span style="font-size: 13px;">全部文件</span>
      </div>
    </v-card-item>

    <VDataTableServer v-model:headers="headers" :items="fileItems">
      <template #item.name="{item}">
        <div class="d-flex align-center gap-1">
          <v-icon :icon="`${item.raw.icon}`" />
          <!-- {{ item.raw.icon }} -->
          <span>{{ item.raw.name }}</span>
          <!-- <v-icon :icon="${item.}" /> -->
        </div>
      </template>
    </VDataTableServer>
    <!-- <v-card-text class="d-flex align-center flex-wrap gap-1">
      <v-icon icon="tabler-files" />
      <span style="font-size: 13px;">全部文件</span>
    </v-card-text> -->
    <!-- <VDivider /> -->
    <!-- <VDataTableServer></VDataTableServer> -->
    <!-- <v-table hover>
      <thead>
        <tr>
          <th class="text-left">名称</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in fileItems" :key="item.name">
          <td>
            <div class="d-flex align-items-center gap-1">
              <v-icon :icon="`${item.icon }`" />
              {{ item.name }}
            </div>
          </td>
        </tr>
      </tbody>
    </v-table> -->
  </v-card>
</template>

<script setup>
import { VDataTableServer } from "vuetify/labs/VDataTable";
// import { VDataTableServer } from 'vuetify/labs/VDataTable'
// const fileItems = [
//   { name: '我的文件', icon: 'tabler-file-text' },
//   { name: '中转站', icon: 'tabler-arrows-exchange' }
// ]
const headers = [
  { title: '名称', key: 'name' }
];
const fileItems = [
  { name: '我的文件', icon: 'tabler-file-text' },
  { name: '中转站', icon: 'tabler-arrows-exchange' }
]
</script>
