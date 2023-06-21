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
              <VCol cols="12" md="1">
                <label for="sendTo" class="v-label text-body-2 text-high-emphasis">发送到：</label>
              </VCol>
              <VCol cols="12" md="11">
                <AppSelect v-model="selectedOptions" :items="states" :menu-props="{maxHeight:'400'}" multiple persistent-hint placeholder="请选择发送信息" />
              </VCol>
            </VRow>
          </VCol>
          <!-- 收件人 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="1">
                <label for="recipient" class="v-label text-body-2 text-high-emphasis">接收者：</label>
              </VCol>
              <VCol cols="12" md="11">
                <AppTextField id="recipient" v-model="recipient" placeholder="请填入接收者信息" />
              </VCol>
            </VRow>
          </VCol>
          <!-- 主题 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="1">
                <label for="theme" class="v-label text-body-2 text-high-emphasis">主题：</label>
              </VCol>
              <VCol cols="12" md="11">
                <AppTextField id="theme" v-model="theme" placeholder="请填入主题内容" />
              </VCol>
            </VRow>
          </VCol>
          <!-- 附件内容 -->
          <VCol cols="10" v-for="(item,index) in person.fileList" :key="index" v-if="person.fileList">
            <VRow no-gutters>
              <v-col cols="12" md="1" />
              <v-col cols="12" md="11">
                <VCard flat border class="d-flex flex-row">
                  <!-- 左侧显示内容 -->
                  <div class="pa-5 flex-grow-1">
                    <VRow>
                      <VCol cols="12" md="6">
                        <div>
                          <div>文件名称</div>
                          <div style="overflow: hidden; text-overflow: ellipsis;white-space: nowrap;">{{ item }}</div>
                        </div>
                      </VCol>
                      <VCol cols="12" md="6">
                        <div>
                          <div>文件大小</div>
                          <div>100kB</div>
                        </div>
                      </VCol>
                    </VRow>
                  </div>
                  <!-- 右侧操作按钮 -->
                  <div class="d-flex flex-column border-s pa-1" style="justify-content: center;">
                    <IconBtn>
                      <VIcon size="20" icon="tabler-x" />
                    </IconBtn>
                  </div>
                </VCard>
              </v-col>
            </VRow>
          </VCol>
          <!-- 上传附件 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="1">
                <label for="annex" class="v-label text-body-2 text-high-emphasis">附件：</label>
              </VCol>
              <VCol cols="12" md="11">
                <VBtn color="primary" @click="handleUpload">
                  <VIcon icon="tabler-upload" />
                  <span>上传附件</span>
                </VBtn>
                <input type="file" ref="uploadInput" v-show="false" @change="dealFileChange" />
              </VCol>
            </VRow>
          </VCol>
          <!-- 富文本区域 -->
          <VCol cols="10">
            <VRow no-gutters>
              <VCol cols="12" md="1" class="d-flex align-items-center" style="flex-direction: column;">
                <label for="text" class="v-label text-body-2 text-high-emphasis mr-8">内容：</label>
              </VCol>
              <VCol cols="12" md="11">
                <!-- <WangEditor /> -->
                <about />
                <!-- <div style="height: 360px;border: 1px solid #ccc; border-radius: 5px;"></div> -->
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>

    <v-card-text>

    </v-card-text>
  </VCard>
</template>


<script setup>
import about from './about.vue';
const selectedOptions = ref(['联系客户1']);
const recipient = ref('')
const states = [
  '联系客户1',
  '联系客户2',
  '联系客户3',
  '联系客户4',
  '联系客户5',
]
const person = reactive({
  fileList: []
})
const theme = ref('')
const uploadInput = ref(null);
const dealFileChange = (e) => {
  const input = e.target;
  let files = input.files;
  if (files) {
    console.log(files[0], 'FileFileFile');
    // console.log(formData, 'formData');
    person.fileList.push(files[0].name)
    console.log(person.fileList, 'formData');
  }
}
const handleUpload = () => {
  // let oBtn = uploadInput.
  console.log(uploadInput.value, 'ssssssssssss');
  let oBtn = uploadInput.value;
  oBtn.click()
}
</script>


<style lang="scss" scoped>
.mailForm {
  .v-row {
    justify-content: center;

    .v-col-md-1 {
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
