// import ProductCard from "./Cards/ProductCard"

import { useWishList } from "../Context/WishListContext"
import ProductCard from "./Cards/ProductCard"

function WishList() {
  const { wishlist } = useWishList()
  console.log(wishlist.length,'123',wishlist);
  
  return (
    <div>
      <h1>wishlist page</h1>
      <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {wishlist && wishlist.map((product:any) => (
          <div key={product.id}
            // onClick={() => handleNavigate(product.id)}
            >

            <ProductCard {...product} />
            {/* <h4>{product.price}</h4> */}

          </div>
        ))}
      </div>

    </div>
  )
}

export default WishList