import TodoInput from "Frontend/todos/components/TodoInput";
import TodoList from "Frontend/todos/components/TodoList";
import { useAppDispatch } from "Frontend/todos/redux/store";
import { fetchTodos } from "Frontend/todos/redux/thunks";

export default function TodoContainer() {
    const dispatch = useAppDispatch();
    dispatch(fetchTodos());
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card px-3">
                            <div className="card-body">
                                <TodoInput />
                                <TodoList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};