package io.subbu.hilla.todoapp.contracts;

import io.subbu.hilla.todoapp.dtos.TodoDto;

import java.util.List;

/**
 * This is the service contract for the TodoService
 */
public interface TodoServiceI {

    /**
     * This method returns all the TodoDto from the store
     * @return List&lt;TodoDto&gt;
     */
    List<TodoDto> list();

    /**
     * This method saves a TodoEntity to the store
     * @param activity String
     * @return TodoDto
     */
    TodoDto save(String activity);

    /**
     * This method toggles a TodoEntity in the store
     * @param id String
     */
    void toggle(String id);

    /**
     * This method removes a TodoEntity from the store
     * @param id String
     */
    void remove(String id);
}
