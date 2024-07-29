import Footer from "../Components/Footer"
import Home from "../Components/Home"
import Navbar from "../Components/NavBar"

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default HomePage






// import axios from "axios"
// import { useEffect, useState } from "react"
// import ProductCard from "../Components/ProductCard"
// import { useNavigate } from "react-router-dom"
// // import {ClipLoader} from 'react-spinners'



// function HomePage() {
//   // const [loading,setLoading]=useState(true)
//   const [products, setProducts] = useState<any[]>([])
//   const [categorys, setCategorys] = useState<string[]>([])
//   const [filterProduct, setFilterProduct] = useState<any[]>([])
//   const [search, setSearch] = useState<string>('')

//   const navigate = useNavigate()
//   useEffect(() => {
//     // setLoading(true)
//     axios.get('https://fakestoreapi.com/products').then((result) => {
//       setProducts(result.data)
//       setFilterProduct(result.data)
//       let categorySet = new Set<string>()
//       result.data.forEach((product: any) => {
//         categorySet.add(product.category)
//       })
//       setCategorys([...categorySet])
//       // setLoading(false)
//     })
//   }, [])
//   const handleNavigate = (productId: number) => {
//     navigate(`/productdetail/${productId}`)
//   }


//   const handleFilter = (category: string) => {
//     console.log(category)
//     // category === 'all' ?
//     //   setFilterProduct([...products])
//     //   :
//       console.log('filter', category);
//     let categoryProduct: any[] = []
//     categoryProduct = products.filter((product: any) => {
//       return product.category === category
//     })
//     setFilterProduct([...categoryProduct])
//   }


//   const handleSearch = (searchText: string) => {
//     setSearch(searchText)
//     let searchProduct: any[] = []
//     searchProduct = filterProduct.filter((product: any) => {
//       return product.title.toLowerCase().includes(searchText.toLowerCase())
//     })
//     setFilterProduct([...searchProduct])
//   }


//   const handlePriceFilter = (e: any) => {
//     const sort = e.target.value  
//     const sortedProduct = [...filterProduct]
//     sort > 0 ?
//       sortedProduct.sort((a, b) => a.price - b.price) : sortedProduct.sort((a, b) => b.price - a.price)
//       setFilterProduct([...sortedProduct])
//   }
// // console.log(loading);


//   return (
//     <div>
//       <div className="bg-white mx-auto flex justify-center">

//         <div className="  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <div className="flex flex-wrap justify-between">
//             {categorys &&

//               <ul className="flex flex-wrap gap-5 pb-10">
//                 {categorys.map((category, i) => {
//                   return (
//                     <>
//                       <li key={i} className="" >
//                         <button className="hover:bg-slate-100 p-4 rounded-md "
//                           onClick={() => handleFilter(category)}>
//                           {category}
//                         </button>

//                       </li >
//                     </>
//                   )
//                 })}


//               </ul>
//             }
//             {

//               <div className="max-w-lg pb-10 md:w-1/2 ">
//                 <div className="flex">

//                   <div className="">
//                     <select onChange={handlePriceFilter} className="bg-white border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5   ">
//                       <option value={0} >SORT BY</option>
//                       <option value={1}  >Price Low To High</option>
//                       <option value={-1}  >Price High To Low</option>
//                     </select>
//                   </div>
//                   <div className="relative w-full">
//                     <input type="search" className="bg-white border border-gray-300  text-gray-900 text-sm rounded-lg  focus:border-black block w-full p-2.5"
//                       placeholder=" Search..."
//                       value={search}
//                       onChange={(e) => handleSearch(e.target.value)} />

//                   </div>
//                 </div>
//               </div>
//             }
//           </div>

//           <div onClick={() => handleFilter('all')}>
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900">ALL PRODUCTS</h2>
//           </div>

//           <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {filterProduct && filterProduct.map((product) => (
//               <div key={product.id}
//                 onClick={() => handleNavigate(product.id)}>
//                 <ProductCard {...product} />
//                 {/* <h4>{product.price}</h4> */}

//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div >
//   )
// }

// export default HomePage

