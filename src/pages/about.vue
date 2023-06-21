<template>
  <div style="border: 1px solid #ccc;">
    <Toolbar style="border-bottom: 1px solid #ccc;" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor style="height: 310px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" @onChange="handleChange" @onDestroyed="handleDestroyed" @onFocus="handleFocus" @onBlur="handleBlur" @customAlert="customAlert" @customPaste="customPaste" />
  </div>
</template>

<script >
// 引入CSS文件表
import '@wangeditor/editor/dist/css/style.css';

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'


export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例,必须使用shallowRef
    const editorRef = shallowRef()

    // 内容HTML
    const valueHtml = ref('<p>Hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = `<p>请输入内容</p>`
      }, 1500);
    })
    // 工具栏配置
    const toolbarConfig = {

    }
    toolbarConfig.toolbarKeys = [
      // 菜单 key
      'headerSelect',

      // 分割线
      '|',

      // 菜单 key
      'bold', 'italic',

      // 菜单组，包含多个菜单
      {
        key: 'group-more-style', // 必填，要以 group 开头
        title: '更多样式', // 必填
        iconSvg: '<svg>....</svg>', // 可选
        menuKeys: ["through", "code", "clearStyle"] // 下级菜单 key ，必填
      },
      "bgColor",
      "fontSize",
      "fontFamily",
      "bulletedList",
      "numberedList",
      // 继续配置其他菜单...
    ]
    const toolbar = DomEditor.getToolbar()
    console.log(toolbar, 'toolbar');

    // 查看工具栏的默认配置
    // const Toolbar = DomEditor.getToolbar(editor);
    // console.log('Toolbar:',);

    const editorConfig = { placeholder: '请输入内容......' }

    // 组件销毁时,也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    });

    /**
     *  !!! 记录 editor实例,重要 
     * */
    const handleCreated = (editor) => {
      editorRef.value = editor
      console.log('created', editor);
    }
    const handleChange = (editor) => {
      console.log('change', editor.children)
    }
    const handleDestroyed = (editor) => {
      console.log('destroyed', editor);
    }
    const handleFocus = (editor) => {
      console.log('focus', editor);
    }
    const handleBlur = (editor) => {
      console.log('blur', editor);
    }
    const customAlert = (info, type) => {
      // console.log(`${type}`-${info});
    }
    const customPaste = (editor, event, callback) => {
      console.log('ClipboardEvent 粘贴事件对象', event)
    }
    console.log('toolbar:', toolbar);
    return {
      editorRef,
      valueHtml,
      mode: 'simple',
      toolbarConfig,
      editorConfig,
      handleCreated,
      handleChange,
      handleDestroyed,
      handleFocus,
      handleBlur,
      customAlert,
      customPaste,
      toolbar
    }
  }
}
</script>
