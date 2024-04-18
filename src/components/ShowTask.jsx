import { Edit, Trash, TickSquare } from 'iconsax-react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ShowTask({ title, Todos, todo, setTodos, completed, EditTodo, setEditTodo }) {

    const handelDelet = ({ id }) => {
        setTodos(Todos.filter((todo) => todo.id !== id))
        toast.error(`${todo.title} حذف شد`, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            theme: "light",
        })
    }
    const handelEdit = ({ id }) => {
        const findTodo = Todos.find(todo => todo.id === id)
        setEditTodo(findTodo)
    }
    const handelComplet = (todo) => {

        setTodos(
            Todos.map((item) => {
                if (item.id === todo.id) { 
                    console.log(item)
                    return { ...item, completed: !item.completed }
                   

                }
                return item
            })
        )
    }
    return (
        <div>
            <>
                <ToastContainer />
                {/* ddd */}
            
                <div className='todo-wrapper'>
                    <div className={`content${todo.completed ? "-completed" : ""}`}>
                        <div>{title}</div>
                    </div>
                    <div className='icons'>
                        <button className='btn' onClick={() => handelComplet(todo)}><TickSquare size="32" color="#d9e3f0" variant="Bulk" /></button>
                        <button className='btn' onClick={() => handelEdit(todo)}><Edit size="32" color="#d9e3f0" variant="Bulk" /></button>
                        <button className='btn' onClick={() => handelDelet(todo)}><Trash size="32" color="#d9e3f0" variant="Bulk" /></button>
                    </div>

                </div>
            </>
        </div>
    )
}
