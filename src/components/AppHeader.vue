<template>
  <el-menu
    class="w-full px-8"
    mode="horizontal"
    :default-active="$route.path"
    router
    :ellipsis="false"
  >
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/editor">Editor</el-menu-item>
    <el-menu-item index="/template">Template</el-menu-item>
    <div class="flex-grow" />
    <user-profile :user="store.user" />
  </el-menu>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '../store'
const store = useGlobalStore()
</script>
