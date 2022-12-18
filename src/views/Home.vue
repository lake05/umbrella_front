<template>
  <div>
    <template-list :list="templates" />
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../store'

const store = useGlobalStore()
const { templates } = storeToRefs(store)
</script>