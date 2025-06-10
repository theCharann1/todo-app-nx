export interface Todo{
    id: number,
    title: string,
    status: 'todo' | 'inprogress' | 'done'
}
interface TodoItemProps{
    todo: Todo
}
const TodoItem = ({todo}: TodoItemProps) => {
    return (
        <li>{todo.title}</li>
    )
}

export default TodoItem