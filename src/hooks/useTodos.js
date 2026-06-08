import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useTodos = () => {
    const [todoItems, setTodoItems] = useState([]);

    const activeTodos = todoItems.filter(item => !item.completed);

    const completedTodos = todoItems.filter(item => item.completed);

    const addTodoItem = (title, note) => {
        const newTodo = {
            id: uuidv4(),
            title,
            note,
            completed: false,
        }

        setTodoItems(prev => [ ...prev, newTodo ]);
    }

    const editTodoItem = (id, updates) => {
        setTodoItems(prev => prev.map(item =>
            item.id === id ? { ...item, ...updates } : item
        ));
    }

    const toggleCompletedTodoItem = (id) => {
        setTodoItems(prev => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
    }

    const deleteTodoItem = (id) => {
        setTodoItems(prev => prev.filter(todo => todo.id !== id));
    }

    return {
        activeTodos,
        completedTodos,
        todoItems,
        addTodoItem,
        deleteTodoItem,
        editTodoItem,
        toggleCompletedTodoItem,
    }
}
