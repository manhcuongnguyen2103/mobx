import {observable, decorate, action} from "mobx"

class UserStore{
    constructor(rootStore){
        this.rootStore = rootStore;
        this.saveRequest = false;
    }

}

export default decorate(UserStore, {
    saveRequest: observable,
    todoList: observable,
    Add: action,
})