import TodoDto from "Frontend/generated/io/subbu/hilla/todoapp/dtos/TodoDto";
import { useAppDispatch } from "Frontend/todos/redux/store";
import { removeTodo, toggleTodo } from "Frontend/todos/redux/thunks";
import { Notification } from "@vaadin/react-components";

export default function TodoItem(todo: TodoDto) {
    const dispatch = useAppDispatch();
    const handleClickForRemove = () => {
        dispatch(removeTodo(todo.id as string));
        Notification.show("Removed the todo ...");
    };
    const handleClickForToggle = () => {
        dispatch(toggleTodo(todo.id as string));
        Notification.show("Updated the todo status ...");
    };
    return (
        <li className={todo.complete ? 'completed' : ''}>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox" type="checkbox" checked={todo.complete} onChange={handleClickForToggle}/>
                    {todo.activity}
                    <i className="input-helper"></i>
                </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline" onClick={handleClickForRemove}></i>
        </li>
    );
};