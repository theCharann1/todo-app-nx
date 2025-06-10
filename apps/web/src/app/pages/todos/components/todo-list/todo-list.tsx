import TodoItem, { Todo } from '../todo-item/todo-item';

export interface TodoListProps {
  todos: Todo[];
}
const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div>No todos</div>
      )}
    </ul>
  );
};

export default TodoList;
