<template>
  <VCard>
    
    <div class="mt-8 ml-11 mb-8 mr-11">
      <div class="form">
      <VForm>
        <VRow>
          <VCol cols="12">
            <VRow no-gutters>
              <VCol cols="12" md="1" class="d-flex align-items-center">
                <label class="v-label text-body-2 text-high-emphasis" for="sendTo">发送到：</label>
              </VCol>
              <VCol cols="12" md="11">
                <AppSelect v-model="selectedOptions" :items="states" :menu-props="{maxHeight:'400'}" multiple persistent-hint  />
              </VCol>
            </VRow>
          </VCol>
          <!-- 接收者 -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol cols="12" md="1" class="d-flex align-items-center">
                <label for="recipient" class="v-label text-body-2 text-high-emphasis">接收者：</label>
              </VCol>
              <VCol cols="12" md="11">
                <AppTextField id="recipient" v-model="recipient" style="max-width: 550px;" />
              </VCol>
            </VRow>
          </VCol>
          <!-- 主题 -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol cols="12" md="1" class="d-flex align-items-center">
                <label for="theme" class="v-label text-body-2 text-high-emphasis">主题：</label>
              </VCol>
              <VCol class="12" md="11">
                <AppTextField id="theme" v-model="theme" style="max-width: 550px;" />
              </VCol>
            </VRow>
          </VCol>
          <!-- 附件 -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol cols="12" md="1" class="d-flex align-items-center">
                <label for="annex" class="v-label text-body-2 text-high-emphasis">附件：</label>
              </VCol>
              <VCol cols="12" md="11">
                <div style="width: 110px;">
                  <VBtn block>添加附件</VBtn>
                </div>
              </VCol>
            </VRow>
          </VCol>
          <!-- 拖拽文件 -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol cols="12" md="1" class="d-flex align-items-center">
                <label for="" class="v-label text-body-2 text-high-emphasis" />
              </VCol>
              <VCol cols="12" md="11">
                <div style="max-width: 550px;height: 200px;border: 1px solid #ccc;border-radius: 5px;"></div>
              </VCol>
            </VRow>
          </VCol>
          <!-- 内容 -->
          <VCol cols="12">
            <VRow no-gutters>
              <VCol cols="12" md="1" >
                <label for="content" class="v-label text-body-2 text-high-emphasis">内容：</label>
              </VCol>
              <VCol cols="12" md="11">
                <div style="max-width: 550px;height: 360px;height: 364px;border: 1px solid #ccc; border-radius: 5px;"></div>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VForm>
    </div>
    </div>
  </VCard>
</template>


<script setup>

const selectedOptions = ref(['联系客户1']);
const recipient = ref('')
const states = [
  '联系客户1',
  '联系客户2',
  '联系客户3',
  '联系客户4',
  '联系客户5',
]
const theme = ref('')
</script>


