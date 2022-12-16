<template>
  <el-menu class="w-full px-8" mode="horizontal" :default-active="$route.path" router :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/editor">Editor</el-menu-item>
    <el-menu-item index="/template">Template</el-menu-item>
    <div class="flex-grow" />
    <user-profile />
  </el-menu>
</template>


<script lang="ts" setup>
import UserProfile from './UserProfile.vue'

const handleSelect = (key: string, keyPath: string[]) => {

}
</script>