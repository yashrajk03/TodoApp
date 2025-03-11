import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
    const { todos } = props;

    return (
        <div>
            <ul className="main">
                {Array.isArray(todos) && todos.length > 0 ? (
                    todos.map((todo) => (
                        <TodoCard key={todo.id} todo={todo.text}>
                            <p>{todo.text}</p>
                        </TodoCard>
                    ))
                ) : (
                    <p>No todos available</p>
                )}
            </ul>
        </div>
    );
};

export default TodoList;