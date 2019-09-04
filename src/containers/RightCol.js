import React from 'react'

import TodoList from './TodoList';
import TodoFunctionBar from './TodoFunctionBar';

import InputForm from '../components/InputForm';
import TodoHeader from '../components/TodoHeader';
import TodoFooter from '../components/TodoFooter';

class RightCol extends React.Component {

  render() {
    return (
        <div>
            <TodoHeader />
            <InputForm />
            <TodoList />
            <TodoFunctionBar />
            <TodoFooter />
        </div>
    )
  }
}

export default RightCol
