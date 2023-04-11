class productManager{
    constructor(){
        this.Products = []
       
    }
    getProduct(){
        console.log(this.Products)
        return this.Products
    }

    addProduct({title,description,price,thumbnail,stock,}) {
        let id = 1
        if (this.Products.length===0){
            id = 1
        } else {
            let lastProducts = this.Products[this.Products.length-1]
            id = lastProducts.id + 1
        }
        let products = { title,description,price,thumbnail,stock,id }
        this.Products.push(products)
    }
    getProductById(id){
        let code = this.Products.find(elemento =>{
            return elemento.id===id
        })
        if(this.id){
            console.log(code)
        }else{
          console.log ("not found")  
        };
        
    }

}

let ticket = new productManager
ticket.addProduct({title:"producto prueba",description:"este es un producto prueba",price:200,thumbnail:"sin imagen",stock:25,})
ticket.getProduct()
ticket.getProductById()
