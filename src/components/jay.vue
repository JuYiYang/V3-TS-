<template>
  <el-slider v-model="progressValue" />
  <h1 v-show="progressValue < 1">jay加载失败</h1>
  <h1 v-show="progressValue > 0 && progressValue < 100">jay加载中...</h1>
  <h1 v-show="progressValue == 100">jay加载成功</h1>
  <el-progress :percentage="progressValue" status="exception" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const progressValue = ref(0)
</script>

<style></style>
