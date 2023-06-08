<template>
  <VCard>
    <div style="border-bottom: 1px solid #ccc;">
      <div style="margin: 1rem;">
      <VIcon class="mr-1" icon="tabler-mail" size="24"  />
      <span style="size: 24px;">发送文件</span>
    </div>
    </div>
    <VRow>
      <VCol cols="12" lg="9" >
        <!-- <div class="d-flex justify-center"> -->
          <VForm>
            <VRow>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol cols="12" md="3">
                    <label for="sender" class="v-label text-body-2 text-high-emphasis">发送至：</label>
                  </VCol>
                  <VCol cols="12" md="9">
                    
                  </VCol>
                </VRow>
                <VRow no-gutters>
                  <VCol cols="12" md="3">
                    <label for="recipient" class="v-label text-body-2 text-high-emphasis">接收者：</label>
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
          </VForm>
        <!-- </div> -->
      </VCol>
      <VCol style="border-left: 1px solid #ccc;margin-top: 12px;" cols="12" sm="12" lg="3">
        <div class="mr-4 ml-1">
          <!-- 高级选项 -->
          <div class="d-flex justify-items-center mb-2" style="font-size: 20px;line-height: 22px;" >
          <VIcon icon="tabler-settings" size="24" class="mr-1" />
          <span >高级选项</span>
          </div>
          <hr color="#ccc">
          <div class="mt-1 mb-1">
            <span>附件设置</span>
          <hr>
            <div>
              <div>
                <VCheckbox v-model="fileCode" label="提取时需验证提取码" />
                <div v-if="fileCode"></div>
              </div>
              <div>
                <VCheckbox v-model="validity" label="文件包有效期" />
                <div v-if="validity"></div>
              </div>
              <div>
                <VCheckbox v-model="triesLimit" label="每人提取次数限制" />
              </div>
            </div>
          </div>
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup>
  const fileCode = ref(true);
  const validity = ref(false)
  const triesLimit = ref(false)
</script>
