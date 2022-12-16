<template>
  <div>
    <div v-for="component in components" :key="component.id">
      {{ component.props.text }}
    </div>
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useEditorStore } from '../store/editor'

const store = useEditorStore()
const { components, currentElement } = storeToRefs(store)

</script>