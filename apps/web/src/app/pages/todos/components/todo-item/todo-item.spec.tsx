import { render } from "@testing-library/react"
import TodoItem from "./todo-item"

describe('TodoItem', () => {
    const mockTodo = {id:1,title:"Todo 1",status:"todo" as const}
    test('should render successfully', () => {
        const {getByText} = render(<TodoItem todo={mockTodo} />)
        expect(getByText).toBeTruthy()
    })

    it('should render proper title',() => {
        const {getByText} = render(<TodoItem todo={mockTodo} />)
        console.log('getByText',getByText,getByText(mockTodo.title))
        expect(getByText(mockTodo.title)).toBeTruthy()
    })
})