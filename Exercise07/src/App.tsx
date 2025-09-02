import { ProductCard } from "./components/ProductCard"
import { Welcome } from "./components/Welcome"

function App (){
  return (<>

{/* extract the component Welcome */}
<Welcome username="Maxamed1441" isPremium={true}/>

{/* product component */}
<ProductCard name="Computer" price={25} description=""/>

  </>)
}

export default App