import { decorate, observable, action, toJS, computed } from "mobx";

const shortid = require('shortid');
class TodoStore{
    constructor(rootStore){
        this.rootStore = rootStore;
        this.saveRequest = false;
    }

    todoList = [{
        id: -1,
        task: "",
        completed: false
    }]

    Save(saveFile) {
        saveFile['TodoList'] = toJS(this.todoList);
    }

    Add (task) {
        let id = shortid.generate();
        this.todoList.push({id: id, task:task, completed:false});
        this.saveRequest = true;
    }
    
    // Add = ({task}) => {
    //     console.log(3, task);
    //     const shortid = require('shortid');
    //     let id = shortid.generate();
    //     this.todoList.push({id: id, task:task, completed:false});
    //     this.saveRequest = true;
    // }

    // Toggle () {
    //     this.completed = !this.completed;
    // }


    Toggle = ({id}) => {
        this.todoList.find(item => {
            if(item.id === id){
                item.completed = !item.completed;
            }
        })
    }

    GetCompleted(id) {
        return this.todoList.find(todo => todo.id === id).completed
      }
}

export default decorate(TodoStore, {
    saveRequest: observable,
    todoList: observable,
    Add: action, //count update
    EditTask: action,
    Toggle: action, //count update
    CompleteAll: action, //count update
    ClearCompleted: action, //count update
    Filter: action,
})