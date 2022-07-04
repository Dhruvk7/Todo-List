import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: '30vh'
    }

    return (
        <>
            <div className='container my-3' style={myStyle}>
                <h3 className='my-3'>Todos List</h3>

                {props.todos.length === 0 ? "No Todos to display !" :
                    props.todos.map((todo, index) => {
                        return (
                            <div key={todo.sno}>
                                <TodoItem todo={todo} onDelete={props.onDelete} />
                                <hr />
                            </div>

                        )
                    })
                }



            </div>
        </>
    )
}
