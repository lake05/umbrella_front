<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="setCount">{{ count }}</button>
    <input type="text" v-model="todo" />
    <button class="addTodo" @click="addTodo">add</button>
    <button class="loadUser" @click="loadUser">load</button>
    <p v-if="user.loading" class="loading">Loading</p>
    <p v-else class="userName">{{ user.data && user.data.username }}</p>
    <p v-if="user.error" class="error">error!</p>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'
const props = defineProps<{ msg: string }>()
const emit = defineEmits<{ (e: 'send', data: any): void }>()

const todo = ref('')
const todos = ref([])
const count = ref(1)
const user = reactive({
  data: null as any,
  loading: false,
  error: false,
})

const setCount = () => count.value++

const addTodo = () => {
  if (todo.value) {
    todos.value.push(todo.value)
    emit('send', todo.value)
  }
}

const loadUser = () => {
  user.loading = true
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => {
      console.log('resp: ', resp)
      user.data = resp.data
    })
    .catch(() => {
      user.error = true
    })
    .finally(() => {
      user.loading = false
    })
}
</script>
