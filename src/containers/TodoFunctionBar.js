import React from 'react'
import TodoCount from '../components/TodoCount';
import Filter from '../components/Filter';
import ClearCompleted from '../components/ClearCompleted';
class TodoFunctionBar extends React.Component {

  render() {
    return (
        <div className = "is-large  column is-half is-offset-one-quarter">
            <div className="is-large  columns">
                <div className="column is-3">
                    <TodoCount />
                </div>
                <div className="column is-6">
                    <Filter />
                </div>
                <div className="column is-pulled-right">
                    <ClearCompleted />
                </div>
            </div>
        </div>
    )
  }
}

export default TodoFunctionBar
