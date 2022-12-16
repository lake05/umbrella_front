<template>
  <div>
    <template-list :list="templates" />
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../store'
import TemplateList from '../components/TemplateList.vue'

const store = useGlobalStore()
const { templates } = storeToRefs(store)
</script>