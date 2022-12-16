<template>
  <div>
    <template-list :list="templates" />
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalData } from '../store'
import TemplateList from '../components/TemplateList.vue'

const store = useGlobalData()
const { templates } = storeToRefs(store)
</script>