import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {FaShoppingCart} from 'react-icons/fa'
import { useCart } from "../Context/CartContext"
function ProductDetail({login}:{login:boolean}) {
    const { productId } = useParams<{ productId: string }>()
    const [productData, setProductData] = useState<any>()
    const navigate=useNavigate()
    const {addToCart}=useCart()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) => {
            setProductData(response.data)
        })
    }, [])

    const handleAddToCart=()=>{
        if(login){
            addToCart({ ...productData, quantity: 1 });

        navigate('/cart')
        } else{
            navigate('/login')
        }
        
        
        
    }

    if (!productData) return <div>Loading...</div>
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full px-5 ">
                <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-6xl w-full md:h-3/4">
                    <div className=" ">
                        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
                                <div className="  lg:flex overflow-hidden">
                                    <div className="img-box  mx-auto shadow-2xl ">
                                        <img src={productData.image} alt="Yellow Tropical Printed Shirt image"
                                            className="max-lg:mx-auto lg:ml-auto h-full" />
                                    </div>
                                </div>
                                <div className="overflow-hidden  data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                                    <div className="data w-full max-w-xl">
                                        <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">Fashion&nbsp; /&nbsp; {productData?.category}
                                        </p>
                                        <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">Basic
                                        {productData.title}</h2>
                                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                            <h6
                                                className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                                ₹{productData?.price * 83}</h6>
                                            <div className="flex items-center gap-2">
                                                
                                                <span className="flex ml-3 pl-3 py-2 border-l-2 ">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`w-6 h-6 cursor-pointer  ${star <= productData?.rating.rate
                                                                ? "text-yellow-500"
                                                                : "text-gray-100"
                                                                }`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    ))}
                                                </span>
                                                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">{productData?.rating.count} review</span>
                                            </div>

                                        </div>
                                        <p className="text-gray-500 text-base font-normal mb-5">
                                            {productData?.description}
                                            <a href="#"
                                                className="text-indigo-600">More....</a>
                                        </p>



                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">

                                            <button onClick={handleAddToCart}
                                                className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100">
                                                <FaShoppingCart/>

                                                Add to cart</button>
                                            <h3>
                                            </h3>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>

    )
}

export default ProductDetail

// < div className = " " >
//     { productData &&
//     <div className="text-gray-700 body-font h-screen lg:overflow-hidden bg-white lg:px-10">
//         <div className="container px-5 py-24 mx-auto">
//             <div className="lg:w-3/4   mx-auto flex flex-wrap lg:px-10">
//                 {/* <div> */}
//                 <img alt="product image" className="lg:w-1/2 w-full  object-cover object-center rounded border border-gray-200" src={productData.image} />

//                 {/* </div> */}
//                 <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                     <h2 className="text-sm title-font text-gray-500 tracking-widest">{productData?.category}</h2>
//                     <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productData?.title}</h1>
//                     <div className="flex mb-4">
//                         <span className="flex items-center">


//                             <span className="text-gray-600 ml-3">Rating</span>
//                         </span>

//                         <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                                 <svg
//                                     key={star}
//                                     className={`w-6 h-6 cursor-pointer  ${star <= productData?.rating.rate
//                                         ? "text-yellow-500"
//                                         : "text-gray-100"
//                                         }`}
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             ))}
//                         </span>
//                         <span className="flex items-center">


//                             <span className="text-gray-600 ml-3">{productData?.rating.count}</span>
//                         </span>
//                     </div>
//                     <p className="leading-relaxed">{productData?.description}
//                     </p>
//                     <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

//                     </div>
//                     <div className="flex">
//                         <span className="title-font font-medium text-2xl text-gray-900">${productData?.price}</span>
//                         <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
//                         <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">

//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         }
//     </div >

