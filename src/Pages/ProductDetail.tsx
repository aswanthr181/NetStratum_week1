import Navbar from "../Components/NavBar"
import ProductDetail from "../Components/ProductDetail"

function ProductDetailPage({login}:{login:boolean}) {
  return (
    <div>
        <Navbar/>
        <ProductDetail login={login}/>
    </div>
  )
}

export default ProductDetailPage


