<template>
  <div>
    store
    {{ template?.title }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalData } from '../store'

const store = useGlobalData()

const template = computed(() => store.getTemplateById(2))

</script>