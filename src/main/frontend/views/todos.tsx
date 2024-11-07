import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import TodoContainer from "Frontend/todos/components/TodoContainer";
import { Provider } from "react-redux";
import { todoStore } from "Frontend/todos/redux/store";

export const config: ViewConfig = {
  menu: {
      order: 4,
      icon: 'line-awesome/svg/globe-solid.svg'
  },
  title: 'Todo List',
};

export default function TodoView() {
    return (
        <Provider store={todoStore}>
            <TodoContainer />
        </Provider>
    );
};
