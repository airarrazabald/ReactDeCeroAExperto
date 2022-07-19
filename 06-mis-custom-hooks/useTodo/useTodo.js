import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [ todos, dispatch ] = useReducer(todoReducer , [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos) );
    }, [todos]);
    
    const handleNewTodo = (todo) => {
        dispatch( {
            type: 'AddTodo',
            payload: todo
        } );
    }

    const handleDeleteTodo = (id) => {
        dispatch( {
            type: 'RemoveTodo',
            payload: id
        } );
    }

    const handleToggleTodo = (id) => {
        dispatch( {
            type: 'ToggleTodo',
            payload: id
        } );
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => !todo.done ).length

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
