import React from 'react'

export default function Todo(props) {
    return (
        <div>
            {props.tasks.length > 0 ? props.tasks.map(task => {
                return (
                    <div className='collection-item' key={task.id} onClick={() => {
                        props.handleDelete(task.id)
                    }}>
                        <a href='#!' class="collection-item">{task.body}</a>
                    </div>
                )
            }): <div className='collection-item'>
                    <span>You don't have any tasks left!!!</span>
                </div>
                }
        </div>
    )
}
