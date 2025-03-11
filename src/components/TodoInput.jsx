import React, { useState } from 'react';

const TodoInput = (props) => {
    const { handleAddTodos } = props;

    const [todoValue, setTodoValue] = useState('');

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => {
                    setTodoValue(e.target.value);
                }}
                type="text"
                placeholder="Enter your task"
            />
            <button
                onClick={() => {
                    if (todoValue.trim() === '') return;
                    handleAddTodos(todoValue);
                    setTodoValue('');
                }}
            >
                Add
            </button>
        </header>
    );
};

export default TodoInput;