<template>
  <VRow>
    <VCol cols="12" md="9">
      <InvoiceEditable />
    </VCol>
    <VCol cols="12" md="3">
        <!-- 保存、取消 -->
        <VCard class="mb-8">
        <VCardText class="mt-2">
          <!-- 发送按钮 -->
          <VBtn block prepend-icon="tabler-send" class="mb-2">
            发送
          </VBtn>
          <!-- 取消按钮 -->
          <VBtn block color="default" variant="tonal" class="mb-2" prepend-icon="tabler-x" >取消</VBtn>
        </VCardText>
        <VDivider />
        <VCardText>
        <AppSelect  v-model="extract" label="提取权限：" :items="extractOptions" />
      </VCardText>
      <VDivider />
      <VCardText class="leftMenu">
        <div class="d-flex align-center justify-space-between mb-3">
        <VLabel for="code">提取时需要验证码</VLabel>
        <div>
          <VSwitch id="code" v-model="data.code" />
        </div>
      </div>
      <div v-if="data.code" class="mb-3">
        <div class="d-flex">
          <AppTextField style="width: 100px;" v-model="data.pwd" />
          <VBtn>生成随机密码</VBtn>
        </div>
      </div>
      <!-- 有效期 -->
      <div class="d-flex align-center justify-space-between mb-3">
        <div class="d-flex">
        <VLabel for="validity" class="mr-3">文件包有效期</VLabel>
        <div v-if="data.validity">
          
        </div>
      </div>
        <div>
          <VSwitch id="validity" v-model="data.validity" />
        </div>
      </div>
      <!-- 提取次数限制 -->
      <div class="d-flex align-center justify-space-between mb-6">
        <VLabel for="triesLimit">每人提取次数限制</VLabel>
        <div>
          <VSwitch id="triesLimit" v-model="data.triesLimit" />
        </div>
      </div>
      <VDivider class="mb-6" />
      <!-- 上传完成 -->
      <div class="d-flex align-center justify-space-between mb-3">
        <VLabel for="uploadCompleted">通过Plugin上传完成时，通知我</VLabel>
        <div>
          <VSwitch id="uploadCompleted" v-model="data.uploadCompleted" />
        </div>
      </div>
      <!-- 送达收件人 -->
      <div class="d-flex align-center justify-space-between mb-3">
        <VLabel for="service">文件包成功送达收件人时，通知我</VLabel>
        <div>
          <VSwitch id="service" v-model="data.service" />
        </div>
      </div>
      <!-- 提取文件包 -->
      <div class="d-flex align-center justify-space-between mb-3">
        <VLabel for="extract">收件人提取文件包时，通知我</VLabel>
        <div>
          <VSwitch id="extract" v-model="data.extract" />
        </div>
      </div>
      <!-- 打开文件包 -->
      <div class="d-flex align-center justify-space-between ">
        <VLabel for="open">收件人打开文件包时，通知我</VLabel>
        <div>
          <VSwitch id="open" v-model="data.open" />
        </div>
      </div>
      </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
  import { reactive } from 'vue'
import InvoiceEditable from './InvoiceEditable.vue'
  const data = reactive({
    code:false, //验证码
    validity:false, //有效期
    triesLimit:false, //提取次数限制
    uploadCompleted:false,  //上传完成
    service:true, //送达收件人
    extract:true, //提取文件包
    open:true,  //打开文件包
    pwd:"1qaz"
  })  
  const extract = ref(['可下载'])
  const extractOptions = ["可下载",'仅预览']
</script>


<style lang="scss" scoped >
.leftMenu {
  .v-label {
    font-size: 13px;
  }

  // span {

  //   font-size: 13px;
  // }
}
</style>
