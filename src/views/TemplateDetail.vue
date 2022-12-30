<template>
  <div>
    {{ template?.title }}
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../store'

const store = useGlobalStore()

const template = computed(() => store.getTemplateById(2))
</script>
