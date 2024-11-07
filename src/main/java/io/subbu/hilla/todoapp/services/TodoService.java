package io.subbu.hilla.todoapp.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import io.subbu.hilla.todoapp.contracts.TodoServiceI;
import io.subbu.hilla.todoapp.dtos.TodoDto;
import io.subbu.hilla.todoapp.models.TodoEntity;
import io.subbu.hilla.todoapp.repos.TodoRepo;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@BrowserCallable
@AnonymousAllowed
@Slf4j
public class TodoService implements TodoServiceI {

    private final ModelMapper modelMapper;

    private final TodoRepo todoRepo;

    @Autowired
    public TodoService(TodoRepo todoRepo, ModelMapper modelMapper) {
        this.todoRepo = todoRepo;
        this.modelMapper = modelMapper;
    }

    /**
     * This method returns all the TodoDto from the store
     *
     * @return List&lt;TodoDto&gt;
     */
    @Override
    public List<TodoDto> list() {
        return todoRepo.findAll().stream().map(todoEntity -> modelMapper.map(todoEntity, TodoDto.class)).toList();
    }

    /**
     * This method saves a TodoEntity to the store
     *
     * @param activity String
     * @return TodoDto
     */
    @Override
    public TodoDto save(String activity) {
        TodoEntity todoEntity = todoRepo.save(TodoEntity.builder().activity(activity).complete(false).build());
        return modelMapper.map(todoEntity, TodoDto.class);
    }

    /**
     * This method toggles a TodoEntity in the store
     *
     * @param id String
     */
    @Override
    public void toggle(String id) {
        TodoEntity todoEntity = todoRepo.findById(id).get();
        todoEntity.setComplete(!todoEntity.isComplete());
        todoRepo.save(todoEntity);
    }

    /**
     * This method removes a TodoEntity from the store
     *
     * @param id String
     */
    @Override
    public void remove(String id) {
        todoRepo.deleteById(id);
    }
}
