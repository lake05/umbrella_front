<template>
  <div>
    <div v-for="(item, index) in list" :key="index" @click="onItemClick(item)">
      <u-text v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  list: unknown[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'on-item-click', data: unknown): void
}>()

const onItemClick = (data: unknown) => {
  emit('on-item-click', data)
}
</script>
