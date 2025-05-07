import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square" style={{color:"white"}}></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-regular fa-trash-can" style={{color:"white"}}></i>
                </button>
            </div>
        </li>
    )
}