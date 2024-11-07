import TodoDto from "Frontend/generated/io/subbu/hilla/todoapp/dtos/TodoDto";
import { createSlice } from "@reduxjs/toolkit";
import {fetchTodos, removeTodo, saveTodo, toggleTodo} from "Frontend/todos/redux/thunks";
import _ from "lodash";

export interface TodoState {
    todos: TodoDto[];
}

const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // case to fetch the todos from store
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = _.concat(state.todos, action.payload);
        })

        //case to save a todo to the store
        builder.addCase(saveTodo.fulfilled, (state, action) => {
            state.todos = _.concat(state.todos, action.payload);
        })

        // case to toggle a todo status in the store
        builder.addCase(toggleTodo.fulfilled, (state, action) => {
            const todoId = _.findIndex(state.todos, { id: action.meta.arg });
            const todo = state.todos[todoId];
            state.todos[todoId] = { ...state.todos[todoId], complete: !todo.complete };
        })

        // case to remove a todo from the store
        builder.addCase(removeTodo.fulfilled, (state, action) => {
            state.todos = _.filter(state.todos, function(todo) { return todo.id !== action.meta.arg });
        })
    }
});