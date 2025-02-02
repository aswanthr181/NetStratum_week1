import { useCart } from "../../Context/CartContext"
import { RxCross1 } from "react-icons/rx";

function CartCard({ item }: { item: any }) {
    const { addToCart, decrementQuantity, removeFromCart } = useCart()

    const handleQuantityUpdate = (task: number) => {
        task < 0 ?
            decrementQuantity(item) : addToCart(item)
    }

    const handleRomove = () => {
        removeFromCart(item)
    }

    return (
        <>
            <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">{item.quantity}</span>
                    <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.image} alt="" />
                </div>

                <div className="relative flex flex-1 flex-col justify-between ">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900">{item.title}</p>
                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">${item.price}</p>
                        </div>

                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end ">
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${(item.price * item.quantity).toFixed(3)}</p>

                        </div>
                        <div className="flex items-center gap-1 border-gray-100">
                        <div className={`${item.quantity > 1 ? '' : 'hidden'}`}>
                                <button onClick={() => handleQuantityUpdate(-1)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                            </div><button onClick={() => handleQuantityUpdate(1)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button onClick={handleRomove} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                            {/* <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                            </svg> */}
                            <RxCross1 />
                            {/* <RxCrossCircled /> */}
                        </button>
                    </div>
                </div>
            </li>
        </>

    )
}

export default CartCard