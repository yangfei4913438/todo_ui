<script setup lang="ts">
import { useTodoStore } from '@/stores/todoList'
import { computed, onMounted } from 'vue'

const todoStore = useTodoStore()

const todos = computed(() => todoStore.todos)

onMounted(() => {
  todoStore.fetchTodos()
})

const removeTodo = (id: string) => {
  todoStore.removeTodo(id)
}

const toggleTodo = (id: string) => {
  todoStore.toggleTodo(id)
}
</script>

<template>
  <article class="relative w-full mt-4">
    <div
      class="absolute top-0 left-0 w-full shadow-xl shadow-gray-300 rounded-md bg-white overflow-hidden"
    >
      <div
        :class="{
          'h-[400px] flex items-center justify-center': true,
          hidden: todos.length > 0
        }"
      >
        暂无待办事项
      </div>
      <ul
        :class="{ 'list-none p-0 max-h-[400px] overflow-scroll': true, hidden: todos.length === 0 }"
      >
        <li
          v-for="(todo, index) in todos"
          :key="index"
          class="flex space-x-8 items-center justify-between py-2.5 border-b border-solid border-[#ddd] px-4"
        >
          <label
            :for="todo.id"
            :class="{
              'flex-1': true,
              'line-through decoration-2 decoration-solid text-[#999]': todo.completed
            }"
          >
            <input
              :id="todo.id"
              type="checkbox"
              :checked="todo.completed"
              @change="toggleTodo(todo.id)"
              class="mr-2 select-none"
            />
            {{ todo.title }}
          </label>
          <button
            @click="removeTodo(todo.id)"
            class="px-4 py-1 bg-none flex-grow-0 border-none text-[#ff0000] cursor-pointer hover:underline"
          >
            x
          </button>
        </li>
      </ul>
      <div :class="{ 'px-4 py-3 flex justify-between': true, hidden: todos.length === 0 }">
        <span>{{ todoStore.activeCount }} 项任务，还未完成</span>
      </div>
    </div>
  </article>
</template>
