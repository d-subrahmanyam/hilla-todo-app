import TodoItem from "Frontend/todos/components/TodoItem";
import { RootState, useAppSelector } from "Frontend/todos/redux/store";
import TodoDto from "Frontend/generated/io/subbu/hilla/todoapp/dtos/TodoDto";

export default function TodoList() {
    const todos: TodoDto[] = useAppSelector((state: RootState) => state.todos);
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {
                    todos.map((todo) => {
                        return (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                complete={todo.complete}
                                activity={todo.activity}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
};