<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
</script>
