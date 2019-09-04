import UserStore from './UserStore'
import TodoStore from './TodoStore'
import { autorun } from 'mobx';

class RootStore {
    constructor() {
        this.userStore = new UserStore(this)
        this.todoStore = new TodoStore(this)
        this.initAutoRun() 
  }

  initAutoRun() {
    this.destroy = autorun(() => {
        const {userStore, todoStore} = this

        if(!(userStore.saveRequest || todoStore.saveRequest)){
            return        
        } 

        const saveFile = {}
        // save theo user
        // userStore.save && userStore.save(saveFile)
        // todoStore.save && todoStore.save(saveFile)

        // localStorage.setItem('SAVE_FILE', JSON.stringify(saveFile))

        userStore.saveRequest = false
        todoStore.saveRequest = false
    }, {name:'AutoSave',delay:300})
  }

}

export default RootStore