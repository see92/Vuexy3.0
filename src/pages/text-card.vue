<template>
  <div class="font-weight-medium">
    <div>
      <v-row>
        <v-col cols="12" md="6">
          <span class="text-base">文件名称</span>
        </v-col>
        <v-col cols="12" md="4">
          <span class="text-base">文件大小</span>
        </v-col>
        <v-col cols="12" md="2"></v-col>
      </v-row>
    </div>
    <div class="d-flex flex-row mt-3">
      <v-row>
        <v-col cols="12" md="6">
          <span class="text-base">临时文件-001</span>
        </v-col>
        <v-col cols="12" md="4">
          <span class="text-base">1023KB</span>
        </v-col>
        <v-col cols="12" md="2">
          <IconBtn><v-icon icon="tabler-x" />
            <VTooltip activator="parent" location="top">删除文件</VTooltip>
          </IconBtn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>


