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
               <VRow> 
                <VCol />
                <VCol cols="3">
                  <label for="render" class="v-label text-body-2 text-high-emphasis">发送至：</label>
                </VCol>
                
                <VCol />
               </VRow>
              </VCol>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol cols="12" md="3">
                    <label for="recipient" class="v-label text-body-2 text-high-emphasis">接收者：</label>
                  </VCol>
                  <VCol cols="12" md="9">
                  </VCol>
                </VRow>
              </VCol>
              <VCol>
                <VRow no-gutters>
                  <VCol align-self="center">1111</VCol>
                </VRow>
              </VCol>
            </VRow>
          </VForm>
        <!-- </div> -->
      </VCol>
      <!-- 右侧菜单 -->
      <VCol style="border-left: 1px solid #ccc;margin-top: 12px;" cols="12" sm="12" lg="3">
        <div class="mr-4 ml-1 leftContent">
          <!-- 高级选项 -->
          <div class="d-flex justify-items-center mb-2" style="font-size: 20px;line-height: 22px;" >
          <VIcon icon="tabler-settings" size="24" class="mr-1" />
          <span >高级选项</span>
          </div>
          <hr color="#ccc">
          <!-- 附件设置 -->
          <div class="mt-1 mb-1">
            <span>附件设置</span>
          <hr>
            <div>
              <div>
                <VCheckbox v-model="data.fileCode" label="提取时需验证提取码" />
                <!-- <div v-if="fileCode"></div> -->
              </div>
              <div>
                <VCheckbox v-model="data.validity" label="文件包有效期" />
                <!-- <div v-if="validity"></div> -->
              </div>
              <div>
                <VCheckbox v-model="data.triesLimit" label="每人提取次数限制" />
              </div>
            </div>
          </div>
          <!-- Email通知 -->
          <div>
            <span>Email通知</span>
            <hr>
            <div>
              <VCheckbox v-model="data.uploadCompleted" label="通过Plugin上传完成时,通知我" />
            </div>
            <div>
              <VCheckbox v-model="data.service" label="文件包成功送达收件人时，通知我" />
            </div>
            <div>
              <VCheckbox v-model="data.extract" label="收件人提取文件包时，通知我" />
            </div>
            <div>
              <VCheckbox v-model="data.open" label="收件人打开文件包时，通知我" />
            </div>
          </div>
          <!-- 提取权限 -->
          <div>
            <span>提取权限</span>
            <hr>
            <div >
              <VRadioGroup v-model="data.radioGroup" inline>
                <VRadio density="compact" label="仅预览" :value="1" />
                <VRadio density="compact" label="可下载" :value="2" />
              </VRadioGroup>
            </div>
          </div>
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup>
import { reactive } from "vue";

  const data = reactive ({
    fileCode:true,  //验证码
    validity:true,  //有效期
    triesLimit:false, //提取次数限制
    uploadCompleted:true, //上传完成
    service:true, //送达收件人
    extract:true, //提取文件包
    open:true,  //打开文件包
    radioGroup:1, //提取权限
  })
</script>


<style lang="sass">

</style>
