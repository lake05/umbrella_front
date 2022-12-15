<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>{{person.name}}</p>
    <p>{{person.age}}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const person = reactive({
  name: 'vike',
  age: 30,
  change(){
    person.age = 31
  }
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
