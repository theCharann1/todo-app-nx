import { render, screen } from "@testing-library/react"
import TodoList from "./todo-list"
import '@testing-library/jest-dom'

describe('TodoList',() => {
    const mockTodo = [
        { id: 1, title: "Todo 1", status: "todo" } as const,
        { id: 2, title: "Todo 2", status: "inprogress" } as const,
        { id: 3, title: "Todo 3", status: "done" } as const
    ]
    it('should render the list',() => {
        const {getByText} = render(<TodoList todos={mockTodo}/>)
        expect(getByText).toBeTruthy()
    })
    
    it('should render each TodoItem with its correct title and implicitly verify keys',() => {
        render(<TodoList todos={mockTodo}/>);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(mockTodo.length);
        mockTodo.forEach((todo) => {
            expect(screen.getByText(todo.title)).toBeInTheDocument();
        })
    })

    it('should should not break for empty arrays',() => {
        render(<TodoList todos={[]}/>);
        const noTodo = screen.getByText('No todos');
        expect(noTodo).toBeInTheDocument();
    })
})
