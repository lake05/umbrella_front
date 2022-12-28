<template>
  <div>
    <div v-for="(item, index) in list" :key="index" @click="onItemClick(item)">
      <u-text v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  list: any[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'on-item-click', data: any): void
}>()

const onItemClick = (data: any) => {
  emit('on-item-click', data)
}
</script>
