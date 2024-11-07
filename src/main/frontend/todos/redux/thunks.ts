import TodoDto from "Frontend/generated/io/subbu/hilla/todoapp/dtos/TodoDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoService } from "Frontend/generated/endpoints";

export const fetchTodos = createAsyncThunk<TodoDto[], void> (
    'todos/fetch',
    async () => {
        return await TodoService.list() as TodoDto[];
    }
);

export const saveTodo = createAsyncThunk<TodoDto, string> (
    'todos/save',
    async (activity) => {
        return await TodoService.save(activity) as TodoDto;
    }
);

export const toggleTodo = createAsyncThunk<void, string> (
    'todo/toggle',
    async (id) => {
        await TodoService.toggle(id);
    }
);

export const removeTodo = createAsyncThunk<void, string> (
    'todo/remove',
    async (id) => {
        await TodoService.remove(id);
    }
);