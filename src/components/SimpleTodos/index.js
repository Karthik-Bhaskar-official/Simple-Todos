import {Component} from 'react'

import TodoList from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoItems: initialTodosList}

  onDelete = id => {
    const {todoItems} = this.state
    const filterTodoList = todoItems.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoItems: filterTodoList})
  }

  render() {
    const {todoItems} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {todoItems.map(each => (
              <TodoList name={each} key={each.id} onDelete={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
