interface TodoCreate {
  title: string
  completed: boolean
}

interface TodoUpdate {
  id: string
  completed: boolean
}

// 一个todo的完整数据结构
interface Todo {
  // 唯一id
  id: string
  // 显示文本
  title: string
  // 完成状态
  completed: boolean
}

// 后端返回的数据
interface TodoReturn extends Todo {
  // 创建时间
  createdTime: string
  // 更新时间
  updatedTime: string
}

interface TodoState {
  todos: Todo[]
}
