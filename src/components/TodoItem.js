import React from 'react'
import { observer, inject } from 'mobx-react'
import CheckBox from '../components/CheckBox'
class TodoItem extends React.Component {
  handleClick = e => {
    const { id } = this.props
    const { rootStore } = this.props
    const { todoStore } = rootStore
    todoStore.Toggle({id:id});
  }

  render() {
    const { id } = this.props
    const { rootStore } = this.props
    const { todoStore } = rootStore
    let completed = todoStore.GetCompleted(id)
    return (
      <li className="box has-background-grey-light" style={{ padding: '0', margin: '3px', height: "7.5vh"}}>
        <div className="columns" style={{ marginLeft: '0', marginRight: '0px' }}>
          <div className="column is-2">
            <CheckBox id={id} checked={completed}  onClick={this.handleClick}/>
          </div>
          <div className="column is-8">
            {/* <p className="bd-notification is-danger">{task}</p> */}
            {id}
          </div>
          <div className="column">
            asdasd
          </div>
        </div>
      </li>
    )
  }
}

export default inject('rootStore') (observer(TodoItem))
