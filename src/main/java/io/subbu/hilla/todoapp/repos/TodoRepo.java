package io.subbu.hilla.todoapp.repos;

import io.subbu.hilla.todoapp.models.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepo extends JpaRepository<TodoEntity, String> {
}
