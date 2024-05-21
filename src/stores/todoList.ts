import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { createTodo, deleteTodo, fetchTodoList, updateTodo } from '@/http/todo'

export const useTodoStore = defineStore('todo', {
  // 基础数据
  state: (): TodoState => {
    return {
      todos: []
    }
  },
  getters: {
    // 计算一共有多少任务还没有完成
    activeCount: (state) => {
      return state.todos.filter((todo) => !todo.completed).length
    }
  },
  actions: {
    // 初始化数据
    async fetchTodos() {
      const data = await fetchTodoList()
      this.todos = data.sort(
        (a: TodoReturn, b: TodoReturn) =>
          new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
      )
    },
    // 新增一条todo
    async addTodo(text: string) {
      const data = text.trim()
      if (!data) return
      const todo = { id: nanoid(), title: data, completed: false }
      this.todos.unshift(todo)
      this.todos[0] = await createTodo({ title: data, completed: false })
    },
    // 移除指定的todo
    async removeTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
      await deleteTodo(id)
    },
    // 切换指定todo的完成状态
    async toggleTodo(id: string) {
      let data
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          data = { id, completed: !todo.completed }
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      if (data) {
        await updateTodo(data)
      }
    }
  }
})
