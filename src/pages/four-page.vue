<template>
  <div>
    <p>父组件</p>
    <Child :msg="msg" :fn="fn" />
  </div>
</template>

<script setup>
import Child from './Child.vue'


const msg = "父组件传递的值"
const fn = (value) => {
  // 接收来自子组件的内容
  console.log(value);
}
</script>
