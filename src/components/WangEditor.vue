<template>
  <div style="border: 1px solid #ccc;">
    <Toolbar class="editorTop" style="border-bottom: 1px solid #ccc;" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor class="editorBottom" style="height: 220px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" />
  </div>
</template>

<script setup>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
// 编辑器实例，必须用 shallowRef

const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("");

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

/**
 * 配置菜单栏区
 */


// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
<style scoped lang="scss">
::v-deep .editorTop {
  border-start-end-radius: 8px;
  border-start-start-radius: 8px;

  & > div {
    border-start-end-radius: 8px;
    border-start-start-radius: 8px;
  }
}

.editorBottom {
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;
}
</style>
