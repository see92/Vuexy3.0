<template>
  <v-card>
    <v-card-item class="py-3 px-5">
      <div class="d-flex" style="justify-content: space-between;">
        <div class="d-flex align-center gap-1">
          <v-icon icon="tabler-file-text" />
          <span style="font-size: 13px;">我的文件</span>
        </div>
        <!-- <div class="d-flex align-center"> -->
        <!-- 右侧搜索功能菜单 -->
        <div class="d-flex gap-3">
          <AppTextField placeholder="标签关键字" density="compact" v-model="fileMy.tagKeywords" style="width: 180px;" />
          <AppTextField placeholder="文件名关键字" density="compact" v-model="fileMy.fileKeywords" style="width: 180px;" />
          <VBtn>
            <div class=" d-flex align-center">
              <VIcon icon="tabler-search" size="15" />
              <span style="font-size: 13px;">搜索</span>
            </div>
          </VBtn>
          <VBtn>
            <div class="d-flex align-center">
              <VIcon icon="tabler-bell-ringing-2" size="15" />
              <span style="font-size: 13px;">上传动态</span>
            </div>
          </VBtn>
        </div>
      </div>
    </v-card-item>
    <!-- <v-card-text class="d-flex align-center flex-warp gap-4">1111</v-card-text> -->
    <VDivider />
    <v-card-text class="d-flex align-center flex-wrap gap-4">
      <div class="me-3 d-flex gap-3">
        <VMenu>
          <template #activator="{props}">
            <VBtn color="primary" v-bind="props">
              <VIcon size="15" icon="tabler-upload" />
              <span style="font-size: 13px;">上传</span>
            </VBtn>
          </template>
          <VList>
            <VListItem v-for="item in list" :key="item.value" :value="item.value" @click="menuClick(item)">
              <VListItemTitle>{{ item.title }}</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
        <!-- 新建文件夹和投递为一组 -->
        <div class="d-flex gap-3" v-if="true">
          <!--  创建文件夹 -->
          <VBtn prepend-icon="tabler-plus" @click="changeAddFile">
            <span style="font-size: 13px;">新建文件夹</span>
          </VBtn>
          <!-- 投递 -->
          <VBtn prepend-icon="tabler-send" @click="changeSend">
            <span style="font-size: 13px;">投递</span>
          </VBtn>
        </div>
        <!-- 点击选中后的标签 -->
        <div v-if="false" class=" d-flex gap-3">
          <VBtn>
            <VIcon icon="tabler-download" size="15" />
            <span style="font-size: 13px;">下载</span>
          </VBtn>
          <VBtnToggle style="height: 39px;" v-model="fileMy.toggleExclusive" divided color="primary" variant="outlined">
            <VBtn><v-icon icon="tabler-share" size="15" class="d-flex align-center" /> <span style="font-size: 13px;">分享</span></VBtn>
            <VBtn><v-icon icon="tabler-files" size="15" class="d-flex align-center" /> <span style="font-size: 13px;">复制</span></VBtn>
            <VBtn><v-icon icon="tabler-file-export" size="15" class="d-flex align-center" /> <span style="font-size: 13px;">移动</span></VBtn>
            <VBtn><v-icon icon="tabler-tag" size="15" class="d-flex align-center" /> <span style="font-size: 13px;">标签</span></VBtn>
            <VBtn icon="tabler-dots" />
          </VBtnToggle>
          <VBtn>
            <VIcon icon="tabler-send" size="15" /> <span style="font-size: 13px;">投递</span>
          </VBtn>
        </div>
      </div>
    </v-card-text>
    <!-- 弹窗部分 -->
    <div class="modal">
      <!-- 新建文件夹 -->
      <VDialog persistent width="500" v-model="fileMy.addFile">
        <!-- 弹窗上方关闭按钮 -->
        <DialogCloseBtn @click="fileMy.addFile = !fileMy.addFile" />
        <VCard title="新建文件夹">
          <VCardText>
            <AppTextField placeholder="新建文件夹" />
          </VCardText>
          <VCardText class="d-flex justify-end gap-3 flex-wrap">
            <VBtn @click="fileMy.addFile = false"> <v-icon icon="tabler-check" size="15" /> <span style="font-size: 13px;">确定</span> </VBtn>
            <VBtn variant="outlined" @click="fileMy.addFile = false"> <v-icon icon="tabler-x" size="15" /> <span style="font-size: 13px;">取消</span> </VBtn>
          </VCardText>
        </VCard>
      </VDialog>
      <!-- 投递文件 -->
      <VDialog persistent max-width="600" v-model="fileMy.send">
        <!-- 关闭按钮 -->
        <DialogCloseBtn @click="fileMy.send = !fileMy.send" />
        <VCard title="投递">
          <VCardText>
            <VRow class="d-flex align-center">
              <VCol cols="12" sm="6" md="3">
                <Label>目标空间：</Label>
              </VCol>
              <VCol cols="12" sm="6" md="9">
                <AppSelect v-model="fileMy.targetSpace" :items="spaceList" items-title="title" items-value="value" />
              </VCol>
            </VRow>
            <VRow class="d-flex align-center">
              <VCol cols="12" sm="6" md="3">
                <Label>目标位置：</Label>
              </VCol>
              <VCol cols="12" sm="6" md="9">
                <AppTextField />
              </VCol>
            </VRow>
            <VRow class="d-flex align-center">
              <VCol cols="12" sm="6" md="3">
                <Label>待投递文件：</Label>
              </VCol>
              <VCol cols="12" sm="6" md="9">
                <VBtn class="d-flex align-center" color="success">
                  <v-icon icon="tabler-plus" />
                  <span style="font-size: 13px;">添加文件</span>
                </VBtn>
              </VCol>
            </VRow>
          </VCardText>
          <VCardText class="d-flex justify-end gap-3">
            <VBtn @click="fileMy.send = false">
              <span style="font-size: 13px;">发送</span>
            </VBtn>
            <VBtn @click="fileMy.send = false">
              <span style="font-size: 13px;">取消</span>
            </VBtn>
          </VCardText>
        </VCard>
      </VDialog>
      <!-- 文件下载 -->
      <VDialog persistent max-width="500" v-model="fileMy.downFile">
        <DialogCloseBtn @click="fileMy.downFile = !fileMy.downFile" />
        <VCard title="文件下载">
          <VCardText>
            <div class="d-flex align-end gap-3">
              文件下载弹窗
            </div>
          </VCardText>
        </VCard>
      </VDialog>
      <!-- 创建分享链接 -->
      <VDialog persistent max-width="600" v-model="fileMy.createLink">
        <DialogCloseBtn @click="fileMy.createLink = !fileMy.createLink" />
        <VCard title="创建分享链接">
          <VTabs v-model="fileMy.linkTab" class="v-tabs-pill">
            <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
              <VIcon size="20" start :icon="item.icon" />
              {{ item.title }}
            </VTab>
          </VTabs>

          <Window v-model="fileMy.linkTab" class="disabled-tab-transition">
            <WindowItem>
              <privateLink />
            </WindowItem>
            <!-- <WindowItem>
              <publicLink />
            </WindowItem> -->
          </Window>
        </VCard>
      </VDialog>
    </div>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'
import privateLink from './view/privateLink.vue'
import publicLink from './view/publicLink.vue'
const list = reactive([
  { title: '上传文件', value: 1 },
  { title: '上传文件夹', value: 2 }
]);
const spaceList = reactive([
  { title: '内网用户1', value: 0 },
  { title: '内网用户2', value: 1 },
  { title: '外网用户1', value: 2 },
  { title: '外网用户2', value: 3 }
])
const fileMy = reactive({
  tagKeywords: '',  //标签关键字
  fileKeywords: '', //文件关键字
  addFile: false, //新建文件夹弹窗
  toggleExclusive: 4,
  send: false,  //投递弹窗
  targetSpace: 0, //目标空间
  downFile: false,  //文件下载
  createLink: true,  //创建分享链接
  linkTab: null,  //标签页切换
})
const tabs = [
  { title: '公开链接', icon: 'tabler-lock-open', tab: '公开链接' },
  { title: '私密链接', icon: 'tabler-lock', tab: '私密链接' }
]
const menuClick = (item) => {
  console.log(item.value);
}
const changeAddFile = () => {
  fileMy.addFile = true
}
const changeSend = () => {
  fileMy.send = true
}
</script>
