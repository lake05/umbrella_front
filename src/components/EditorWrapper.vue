<template>
  <div
    class="p-0 cursor-pointer border border-solid border-transparent select-none hover:border-dashed hover:border-slate-800"
    @click="onItemClick(id)" :class="{'border-blue-500': active}">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  active: false
});


const emit = defineEmits<{
  (e: 'set-active', id: string): void
}>()

const onItemClick = (id: string) => {
  emit('set-active', id)
}

</script>

<style scoped>

</style>