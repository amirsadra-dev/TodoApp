import { useState, useEffect } from 'react'
import ShowTask from './ShowTask'
import { v4 as uuidv4 } from 'uuid'
import { Add } from 'iconsax-react'
import Emety from '../assest/empety.webp'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function TodoForm() {
    const initial = JSON.parse(localStorage.getItem("Todos")) || []
    const [value, setValue] = useState(" ")
    const [Todos, setTodos] = useState(initial)
    const [EditTodo, setEditTodo] = useState()
    const taskCount = Todos.length
    useEffect(() => {
    
        localStorage.setItem("Todos", JSON.stringify(Todos));
    }
        , [Todos])
    const updateTodo = (title, id, completed) => {
        const newTodo = Todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo

        )
        setTodos(newTodo)
        setEditTodo('')
        toast.info(`تغییر انجام شد`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
    useEffect(() => {

        if (EditTodo) {
            setValue(EditTodo.title)
        }
        else setValue('')

    }
        , [EditTodo, setValue])


    const handelInputChange = (e) => {
        setValue(e.target.value)
    }
    const handelAddTask = (e) => {
        e.preventDefault();
        if (!EditTodo) {
            if (value.trim() !== '' && value !== null) {
                setTodos([...Todos, { id: uuidv4(), title: value, completed: false }])
                setValue('')
                toast.success(`${value} اضافه شد`, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        } else updateTodo(value, EditTodo.id, EditTodo.completed)
    }




    return (
        <>


            <ToastContainer />
            <div className='container'>
                
                    {Todos.length > 0 ? <div className='info-todo'>
                        تعداد تسک ها <span>{taskCount}</span>
                    </div> : ''}
                    <div className='container-todos'>
                    <div className='input-wrapper'>
                        <form className='form' onSubmit={handelAddTask}>
                            <input type="text" value={value} onChange={handelInputChange} />
                            <button className='btn-add' onClick={handelAddTask}>
                                <Add size="32" color="#d9e3f0" variant="Bulk" />
                            </button>
                        </form>
                    </div>
                    {!Todos.length > 0 ? <><p className='empety-text'>تسک خود را وارد کنید</p> <img src={Emety} alt='a' className='empety' />   </> : Todos.map((todo) => (
                        <>
                        <div className='dd'>

                            <ShowTask key={todo.id} title={todo.title} todo={todo} Todos={Todos} setTodos={setTodos} completed={todo.completed} EditTodo={EditTodo} setEditTodo={setEditTodo} />
                        </div>
                        </>

                    ))}
                </div>
            </div>

        </>
    )
}
