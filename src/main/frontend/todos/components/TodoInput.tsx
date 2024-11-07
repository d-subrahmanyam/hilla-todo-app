import { useSignal } from '@vaadin/hilla-react-signals';
import { useAppDispatch } from "Frontend/todos/redux/store";
import { saveTodo } from "Frontend/todos/redux/thunks";
import { Notification } from "@vaadin/react-components";
export default function TodoInput() {
    const activity = useSignal('');
    const dispatch = useAppDispatch();
    const handleClick  = () => {
        dispatch(saveTodo(activity.value));
        activity.value = '';
        Notification.show("Saved the todo ...");
    };

    return(
        <>
            <h4 className="card-title">Awesome Todo list</h4>
            <div className="add-items d-flex">
                <input type="text"
                       className="form-control todo-list-input"
                       placeholder="What do you need to do today?"
                       value={activity.value}
                       onChange={(evt) => activity.value = evt.target.value }
                       onKeyDown={(evt) => { if(evt.code === 'Enter') handleClick(); } }
                />
                <button
                    className="add btn btn-primary font-weight-bold todo-list-add-btn"
                    onClick={handleClick}
                >
                    Add
                </button>
            </div>
        </>
    );
};