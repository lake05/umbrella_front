<template>
  <el-button @click="login" class="mt-2" v-if="!user.isLogin" type="primary">
    登录
  </el-button>

  <el-sub-menu index="1-2" v-else>
    <template #title>{{ user.userName }}</template>
    <div class="flex justify-center">
      <el-button @click="logout">登出</el-button>
    </div>
  </el-sub-menu>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useGlobalStore, UserProps } from '../store'

const props = defineProps<{
  user: UserProps
}>()

const router = useRouter()
const store = useGlobalStore()

const login = () => {
  store.login()
  ElMessage({
    message: 'login success.',
    type: 'success',
  })
}

const logout = () => {
  store.logout()
  ElMessage({
    message: 'logout success.',
    type: 'success',
  })

  setTimeout(() => {
    router.push('/')
  }, 1000)
}
</script>
