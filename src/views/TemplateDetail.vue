<template>
  <div>
    store
    {{ template?.title }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '../store'

const store = useGlobalStore()

const template = computed(() => store.getTemplateById(2))

</script>