<template>
  <h1>CMD 更改</h1>
  <el-button type="primary">Primary</el-button>
  <br />
  <div class="colorPicker" :style="{ backgroundColor: color }"></div>
  <el-color-picker v-model="color" size="small" />
  <h2>{{ $store.state.token }}</h2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const color = ref('#008000')
</script>

<style lang="less">
.colorPicker {
  width: 200px;
  height: 200px;
}
</style>
