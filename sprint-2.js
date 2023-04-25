const fs = require('fs')

class UsarManager{
    constructor(path){
        this.users= []
        this.path= path
        this.init(path)
    }
    init(path){
        let file= fs.existsSync(path)
        if (!file){
            fs.writeFileSync(path)
            .then(res=>console.log('file created'))
            .catch(err=>console.log(err))
        }
    }
}
let manager = new UsarManager('./users.js')