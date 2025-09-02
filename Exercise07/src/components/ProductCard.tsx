
// interface of product
interface ProductProps {
    name : string,
    price : number
}

type productTypeProp = ProductProps & {
      description?: string
}



export const ProductCard = ({name,price, description}:productTypeProp)=>{
    return (
        <>
        <h1>Products</h1>
        <p>name: {name}</p>
        <p>price: ${price}</p>
        {
            description && <p>description: {description}</p>
        }
        
        </>
    )

}


