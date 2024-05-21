<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'

import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoList'

const todoStore = useTodoStore()

const newTodo = ref('')

const addTodo = () => {
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <main class="w-screen h-screen flex flex-col text-gray-400">
    <header
      class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center pt-12 pb-24"
    >
      <div class="w-1/2">
        <h2 class="text-5xl uppercase mb-12 text-white">Todo List</h2>
        <form @submit.prevent="addTodo" class="flex">
          <input
            v-model="newTodo"
            placeholder="新增一个任务"
            class="flex-1 p-2.5 mr-2.5 border border-solid border-[#ddd] rounded shadow"
          />
          <button
            type="submit"
            class="py-2.5 px-5 border-0 bg-[#007bff] hover:bg-[#0056b3] text-white rounded shadow cursor-pointer"
          >
            新增
          </button>
        </form>
        <TodoList />
      </div>
    </header>
    <section class="flex-1 bg-gray-100" />
  </main>
</template>
