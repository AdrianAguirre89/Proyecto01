const fs = require('fs')

class productManager{
    constructor(){
        this.path = []
        this.path = "./Productos.txt"
       
    }
    /*Debe tener un método getProducts, el cual debe leer el archivo de productos 
    y devolver todos los productos en formato de arreglo.
 */
    getProduct(){
        let file = fs.existsSync(this.path)
        if(!file){
        fs.writeFileSync(path,'[]')
        console.log('file created at path: '+this.path)
            return 'file created at path: '+this.path
        } else {
           
            this.path = JSON.parse(fs.readFileSync(this.path,'UTF-8'))
            console.log(this.path)
            return this.path
        }
    
    
    }
    /*Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado,
     asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).*/

    addProduct({title,description,price,thumbnail,stock}) {
        let id = 1
        if(this.path === null || this.path.length===0){
            id = 1
        } else {
            let lastProducts = this.path[this.path.length-1]
            id = lastProducts.id + 1
        }
        let products = { title,description,price,thumbnail,stock,id }
        this.path.push(products)
        let data_json = JSON.stringify(this.path,null,2)
        fs.writeFileSync(this.path,data_json)
    }
    /*Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo,
     debe buscar el producto con el id especificado y devolverlo en formato objeto
 */
    getProductById(id){
        let producto = this.path.find(elemento =>{
            return elemento.id===id
        })
        if(producto){
            //console.log(producto)
            return producto
        }else{ 
          console.log("Not found")  
        };

    }
    /* Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar,
     así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe
      actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
*/
    async update_producto(id,producto_actualizar) {
        try {
            console.log("LOG 1 " + producto_actualizar);
            let producto =this.getProductById(id)
            for (let prop in producto_actualizar) {
                console.log(producto[prop]);
                producto[prop] = producto_actualizar[prop]
            }
            // this.Products[id] = producto
            let data_json = JSON.stringify(this.path,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('updated productos: '+id)
            return 'updated productos: '+id
        } catch(error) {
            console.log(error)
            return 'error: updating productos'
        }
    }
    async deleteProduct(id) {
        try {   
            let one = this.getProductById(id)
            if(!one)
            this.Product = this.Product.filter(each=>each.id!==id)
            let data_json = JSON.stringify(this.Product,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('delete user: '+id)
            return 'delete user: '+id
        } catch(error) {
            console.log(error)
            return 'error: deleting user'
        }
    }
    }



let ticket = new productManager
ticket.getProduct()
ticket.addProduct({title:"producto prueba2",description:"este es un producto prueba",price:200,thumbnail:"sin imagen",stock:25})
//ticket.getProductById(2)
//icket.update_producto(3,{title:"adrian",description:"este es un producto prueba",price:200,thumbnail:"sin imagen",stock:25})
//ticket.deleteProduct(3)