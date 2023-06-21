<template>
  <VCard class="email-compose-dialog">
    <!-- <VCardText>
      <div>
        <VIcon icon="tabler-mail" class="mr-1" />
        <span style="font-size: 13px;">发送邮件</span>
      </div>
    </VCardText> -->
    <VCardItem class="py-3 px-5">
      <div class="d-flex align-center">
        <VIcon icon="tabler-mail" class="mr-1" />
        <span class="font-weight-medium">发送邮件</span>
      </div>
    </VCardItem>
    <VDivider />
    <!-- <VForm> -->
    <VCardText class="gap-y-5 ">
      <div>
        <VForm class="mailForm">
          <VRow>
            <!-- 发送至 -->
            <VCol cols="10">
              <VRow no-gutters>
                <!-- <VCol cols="12" md="2">
                  <label for="sendTo" class="v-label text-body-2 text-high-emphasis">发送到：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppSelect v-model="selectedOptions" :items="states" :menu-props="{maxHeight:'400'}" multiple persistent-hint placeholder="请选择发送信息" />
                </VCol> -->
                <AppSelect v-model="selectedOptions" :items="states" multiple persistent-hint :menu-props="{maxHeight:'400'}">
                  <template #prepend-inner>
                    <div class="text-sm text-disabled" style="width: 70px;">
                      发送至：
                    </div>
                  </template>
                </AppSelect>
              </VRow>
            </VCol>
            <VDivider style="margin-right: -12px;margin-left: -12px;" />
            <!-- 收件人 -->
            <VCol cols="10">
              <VRow no-gutters>
                <!-- <VCol cols="12" md="2">
                  <label for="recipient" class="v-label text-body-2 text-high-emphasis">接收者：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppTextField id="recipient" density="compact" v-model="recipient" placeholder="请填入接收者信息" />
                </VCol> -->
                <AppTextField v-model="recipient" density="compact">
                  <template #prepend-inner>
                    <div class="text-sm text-disabled" style="width: 70px;">接收者:</div>
                  </template>
                </AppTextField>
              </VRow>
            </VCol>
            <VDivider style="margin-right: -12px;margin-left: -12px;" />
            <!-- 主题 -->
            <VCol cols="10">
              <VRow no-gutters>
                <!-- <VCol cols="12" md="2">
                  <label for="theme" class="v-label text-body-2 text-high-emphasis">主题：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppTextField id="theme" v-model="theme" placeholder="请填入主题内容" />
                </VCol> -->
                <appTextField v-model="theme" density="compact">
                  <template #prepend-inner>
                    <div class="text-sm text-disabled" style="width: 70px;">主题：</div>
                  </template>
                </appTextField>
              </VRow>
            </VCol>
            <VDivider style="margin-right: -12px;margin-left: -12px;" class="mb-3" />
            <!-- 上传附件 -->
            <VCol cols="10">
              <VRow no-gutters class="files">
                <div class="d-flex">
                  <div>
                    <appTextField v-model="file" density="compact" style="width: 95px;" class="text-disabled">
                      <template #prepend-inner>
                        <div class="text-sm text-disabled" style="width: 70px;">附件：</div>

                      </template>
                    </appTextField>
                  </div>
                  <div>
                    <el-upload v-model:file-list="fileList" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed" :show-file-list="false">
                      <el-button color="#006aeb">上传附件</el-button>
                    </el-upload>
                  </div>
                </div>
              </VRow>
            </VCol>

            <VCol cols="10" v-if="fileList">
              <VRow no-gutters class="files">
                <!-- <appTextField style="width: 95px;" /> -->
                <div style="width: 70px;"></div>
                <div class="ml-6">222</div>
              </VRow>
            </VCol>
            <!-- <VDivider /> -->
            <!-- 富文本区域 -->
            <VCol cols="10">
              <VRow no-gutters class="files">
                <!-- <VCol cols="12" md="2" style="flex-direction: column;">
                  <label for="text" class="v-label text-body-2 text-high-emphasis">内容：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <WangEditor />
                  <about />
                </VCol> -->
                <div class="d-flex">
                  <AppTextField v-model="editor" density="compact" class="text-disabled" style="width: 70px;" readonly>
                    <template #prepend-inner>
                      <div class="text-sm text-disabled" style="width: 70px;">内容：</div>
                    </template>
                  </AppTextField>
                  <about class="mt-3 ml-6" />
                </div>
              </VRow>
            </VCol>
          </VRow>
        </VForm>
      </div>
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
const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles);
}
const handlePreview = (uploadFile) => {
  console.log(uploadFile);
}
const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(`当前限制上传3个文件, 本次上传了 ${files.length} 个文件, 共选择了 ${files.length + uploadFiles.length} 个文件`);
};
const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(`确定删除 ${uploadFile.name} ?`).then(() => true, () => false);
};
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
</style>
