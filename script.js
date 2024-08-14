class ProductManager {
    
    constructor (){
        this.products = []
        this.nextId = 1;
    }


    addProdudct (title,description,price,thumbnail,code,stock) {
        if (title || description || price || thumbnail || code || stock === "") {
            console.error("Todos os campos são obrigatórios");
            return
            
        }
    }
       
    let existeProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.error("O código do produto já existe.");
            
        }
        
        const newProduct = {
            id: this.nextId++,
            title:  title,
            description:  Description,
            price:  price,
            thumbnail:  Thumbnail,
            code:  Code,
            stcok:  Stock,
        }

        this.products.push(newProduct),

        getProductById(id){
            const product = this.products.map(product => product.id === id);

            if (product) {
                console.error("Não encontrado")
                
            }
        }
 
}
const menager = new ProductManager();

menager.addProdudct("Iphone 14 Pro Max", "Smathphone da Apple", 5000.00, code1, 3);
menager.addProdudct("Galáxy S22", "Smathphone da Samsung", 2500.00, code2, 8);
menager.addProdudct("Câmera Mirrorles Sony Alpha a72", "Câmera Profissional DSRL", 10000.00, code3, 1);
menager.addProdudct("smart Watches", "Relógio Digital", 300.00, code1, 24)


console.log(menager.getProductById(3))
console.log(menager.getProductById(6))
