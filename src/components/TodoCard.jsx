import React from 'react';

const TodoCard = (props) => {
    const { todo, children } = props;

    return (
        <li className="todoItem">
            {todo}
            {children}
            <div className="actionsContainer">
                <i className="fa-solid fa-check-square"></i>
                <i className="fa-solid fa-trash"></i>
            </div>
        </li>
    );
};

export default TodoCard;