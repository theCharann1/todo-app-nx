import { useState } from "react"
import { TodoList } from "../components"
import { Todo } from "../components/todo-item/todo-item"

const TodoPage = () => {
    const [todos,setTodos ] = useState<Todo[]>([
        {id:1,title:"Todo 1",status:"todo"},
        {id:2,title:"Todo 2",status:"inprogress"},
    ])
    return (
        <div>
            <h1>Todos</h1>
            <TodoList todos={[]}/>
        </div>
    )
}

export default TodoPage