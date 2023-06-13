<template>
  <VCard>
    <VCardText>
      <div>
      <VIcon icon="tabler-mail" class="mr-1" />
      <span style="font-size: 13px;">发送邮件</span>
      </div>
    </VCardText>
    <VDivider />
    <!-- <VForm> -->
    <VCardText class="gap-y-5 ">
      <div class="ma-sm-4">
        <VForm class="mailForm">
          <VRow>
            <!-- 发送至 -->
            <VCol cols="10">
              <VRow no-gutters>
                <VCol cols="12" md="2">
                  <label for="sendTo" class="v-label text-body-2 text-high-emphasis">发送到：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppSelect v-model="selectedOptions" :items="states" :menu-props="{maxHeight:'400'}" multiple persistent-hint placeholder="请选择发送信息" />
                </VCol>
              </VRow>
            </VCol>
            <!-- 收件人 -->
            <VCol cols="10">
              <VRow no-gutters>
                <VCol cols="12" md="2">
                  <label for="recipient" class="v-label text-body-2 text-high-emphasis">接收者：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppTextField id="recipient" v-model="recipient" placeholder="请填入接收者信息" />
                </VCol>
              </VRow>
            </VCol>
            <!-- 主题 -->
            <VCol cols="10">
              <VRow no-gutters>
                <VCol cols="12" md="2">
                  <label for="theme" class="v-label text-body-2 text-high-emphasis">主题：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppTextField id="theme" v-model="theme" placeholder="请填入主题内容" />
                </VCol>
              </VRow>
            </VCol>
            <!-- 抄送 -->
            <!-- <VCol cols="10">
              <VRow no-gutters>
              <VCol cols="12" md="2">
                <label for="carbonCopy" class="v-label text-body-2 text-high-emphasis">抄送：</label>
              </VCol>
              <VCol cols="12" md="10">
                <AppTextField id="carbonCopy" v-model="carbonCopy" placeholder="添加抄送对象"></AppTextField>
              </VCol>
            </VRow>
            </VCol> -->
            <!-- <VCol cols="10" v-if="fileList">
              <VRow no-gutters>
                <VCol cols="12" md="2" />
                <VCol cols="12" md="10">
                  <div v-for="(item) in fileList">
                    <div class="d-flex ">
                    <div class="mr-2">{{ item.name }}</div>
                    <VIcon class="mt-1"  size="15" icon="tabler-x" />
                  </div>
                  </div>
                </VCol>
              </VRow>
            </VCol> -->
            <!-- 上传附件 -->
            <VCol cols="10" >
              <VRow no-gutters>
                <VCol cols="12" md="2">
                  <label for="annex" class="v-label text-body-2 text-high-emphasis">附件：</label>
                </VCol>
                <VCol cols="12" md="10" >
                  <!-- <VBtn style="width: 110px;">添加附件</VBtn> -->
                  <div>                  
                  <el-upload  v-model:file-list="fileList" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed">
                    <el-button style="height: 38px;margin-bottom: -1rem;" color="#006aeb">上传附件</el-button>
                  </el-upload>
                </div>
                </VCol>
              </VRow>
            </VCol>
            

            <!-- 富文本区域 -->
            <VCol cols="10">
              <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center" style="flex-direction: column;" >
                  <label for="text"  class="v-label text-body-2 text-high-emphasis">内容：</label>
                </VCol>
                <VCol cols="12" md="10">
                  <!-- <WangEditor /> -->
                  <about/>
                  <!-- <div style="height: 360px;border: 1px solid #ccc; border-radius: 5px;"></div> -->
                </VCol>
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
const handleRemove = (file,uploadFiles) => {
  console.log(file,uploadFiles);
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

      // align-items: center;
    }
  }
}
</style>
