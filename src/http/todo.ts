// 获取任务列表
export const fetchTodoList = async () => {
  return await fetch('/api/todo').then((res) => res.json())
}

// 创建任务
export const createTodo = async (data: TodoCreate) => {
  return await fetch('/api/todo', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

// 修改任务
export const updateTodo = async (data: TodoUpdate) => {
  return await fetch('/api/todo', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

// 删除任务
export const deleteTodo = async (id: string) => {
  return await fetch(`/api/todo/${id}`, { method: 'delete' }).then((res) => res.json())
}
