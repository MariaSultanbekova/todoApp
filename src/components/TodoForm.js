import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState("")

        const handleSubmit = e => {
                e.preventDefault();

                addTodo(value);

                setValue("")
        }
        return (
                <form className='TodoForm' onSubmit={handleSubmit}>
                        <input type='text' value={value} className='todo-input' placeholder='what is the tast for today?' onChange={(e) => setValue(e.target.value)}/>
                        <button type='submit' className='todo-btn'>Add task</button>
                </form>
        )
}
