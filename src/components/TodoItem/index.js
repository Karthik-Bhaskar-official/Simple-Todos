// Write your code here
import './index.css'

const TodoList = props => {
  const {name, onDelete} = props
  const {title, id} = name
  //   console.log(title)

  const deleteTodo = () => {
    // console.log(id)
    onDelete(id)
  }

  return (
    <li>
      <p>{title}</p>
      <div>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </li>
  )
}

export default TodoList
