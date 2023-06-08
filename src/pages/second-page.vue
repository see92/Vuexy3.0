<template>
  <VCard>
    <div style="border-bottom: 1px solid #ccc;">
      <div style="margin: 1rem;">
      <VIcon class="mr-1" icon="tabler-mail" size="24"  />
      <span style="size: 24px;">发送文件</span>
    </div>
    </div>
    <VRow >
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
      <VCol cols="12" sm="12" lg="3">222</VCol>
    </VRow>
  </VCard>
</template>

<script setup>

</script>
