<template>
  <el-config-provider :locale="zhCn">
    <el-container class="h-screen">
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
