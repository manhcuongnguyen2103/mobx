import React from 'react'
import { observer, inject } from 'mobx-react'
import TodoItem from '../components/TodoItem';
class TodoList extends React.Component {
  render() {
    const { rootStore } = this.props
    const { todoStore } = rootStore
    const { todoList } = todoStore
    return (
      <div className = "is-large  column is-half is-offset-one-quarter" style={{paddingLeft: "0px", paddingRight: "0px"}}>   
        <ul className="is-large  column " style={{padding: '0px'}}>
            {todoList.map(item => <TodoItem id={item.id}/>)}
        </ul>
      </div>
    )
  }
}

export default inject('rootStore') (TodoList)