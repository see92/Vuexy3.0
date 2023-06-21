<template>
  <VCard class="email-compose-dialog">

    <!-- 标题部分 -->
    <VCardItem class="py-3 px-5">
      <div class="d-flex align-center">
        <VIcon icon="tabler-mail" class="mr-1" />
        <span class="font-weight-medium">发送邮件</span>
      </div>
    </VCardItem>
    <VDivider />
    <!-- <VForm> -->

    <!-- 文本内容 -->
    <VCardText class="gap-y-5 ">
      <VForm class="mailForm">
        <VRow>
          <!-- 发送至 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="12">
                <VSelect label="发送至：" multiple v-model="selectedOptions" :items="states" persistent-hint />
              </VCol>
            </VRow>
          </VCol>
          <!-- 收件人 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="12">
                <v-text-field hide-details="auto" label="收件人：" type="email" v-model="recipient" />
              </VCol>
            </VRow>
          </VCol>
          <!-- 主题 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VTextField label="主题：" hide-details="auto" v-model="theme" />
            </VRow>
          </VCol>
          <VDivider style=" margin-right: -12px;margin-left: -12px;" class="mt-3 mb-3" />

          <!-- 上传附件 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="1" style="display: flex; align-items: center;">
                <div class="ml-4">附件：</div>
              </VCol>
              <VCol cols="12" md="11">
                <div style="height: 40px;">
                  <el-upload v-model:file-list="fileList" class="upload-demo" action="" :http-request="handleUpload" multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed" :show-file-list="false">
                    <el-button :icon="el-icon-search" style="height: 40px;" color="#006aeb">上传附件</el-button>
                  </el-upload>
                </div>
              </VCol>
            </VRow>
          </VCol>
          <VCol cols="10" v-if="fileList  ">
            <VRow no-gutters>
              <VCol cols="12" md="1"></VCol>
              <VCol cols="12" md="11">
                <div v-for="(item,index) in fileList" :key="index">
                  <div class="d-flex" style="width: 200px; justify-content: space-between;">
                    <div>{{ item.name }}</div>
                    <div>
                      <VIcon icon="tabler-x" @click="del_file(item)" />
                    </div>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCol>
          <!-- 富文本区域 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="1" style="display: flex;flex-direction: column; align-items: center;">
                <div class="ml-2">内容：</div>
              </VCol>
              <VCol cols="12" md="11">
                <about style="border-radius: 5px;" />
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>


<script setup>
import about from './about.vue'
import { ElMessage, ElMessageBox } from 'element-plus';
// import WangEditor from '@/components/WangEditor.vue'
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
const carbonCopy = ref('')

const fileList = ref()
// const handleRemove = (file, uploadFiles) => {
//   console.log(file, uploadFiles);
// }
// 可以获取图片参数
const handleUpload = (file) => {
  console.log(file, 'filefilefile');
}

const handlePreview = (uploadFile) => {
  console.log(uploadFile);
}
// 限制上传提示
const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(`当前限制上传3个文件, 本次上传了 ${files.length} 个文件, 共选择了 ${files.length + uploadFiles.length} 个文件`);
};
const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(`确定删除 ${uploadFile.name} ?`).then(() => true, () => false);
};
const del_file = (file) => {

  console.log(fileList._rawValue, 'filefiles');

}
</script>


<style lang="scss" scoped>
.mailForm {
  .v-row {
    justify-content: center;

    .v-col-md-2 {
      display: flex;
      align-items: center;
    }
  }

  .files {
    display: flex;
    justify-content: flex-start;
  }
}
</style>




<!-- 
<style lang="scss">
@use "@core/scss/base/mixins";

.v-card.email-compose-dialog {
  z-index: 910 !important;

  @include mixins.elevation(18);

  .v-field--prepended {
    padding-inline-start: 20px;
  }

  .v-field__prepend-inner {
    align-items: center;
    padding: 0;
  }

  .v-card-item {
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  }

  .v-textarea .v-field {
    --v-field-padding-start: 20px;
  }

  .v-field__outline {
    display: none;
  }

  .v-input {
    .v-field__prepend-inner {
      display: flex;
      align-items: center;
      padding-block-start: 0;
    }
  }

  .app-text-field {
    .v-field__input {
      padding-block-start: 6px;
    }

    .v-field--focused {
      box-shadow: none !important;
    }
  }
}
</style> -->
