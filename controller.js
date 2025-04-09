const data = require('./data')
class Controller {
    async getTodos () {
        return new Promise ((resolve , reject) => resolve(data))
    }

    async getTodo() {
        return new Promise ((resolve , reject) =>{
            let todo = data.find(todo => todo.id === parseInt(id))
        })
    }
}