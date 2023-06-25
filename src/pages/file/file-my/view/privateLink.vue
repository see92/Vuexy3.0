<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <div>
          <div class="mt-3 ml-3 mb-3">分享范围</div>
          <VDivider />
          <!-- 分享范围 -->
          <div>
            <VRadioGroup></VRadioGroup>
          </div>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>


<script setup>
import { reactive } from "vue";

const data = reactive({
  range: [
    { value: 0, label: '任何人' },
    { value: 1, label: '平台所有人' },
    { value: 2, label: '平台内部用户' }
  ]
})
</script>
