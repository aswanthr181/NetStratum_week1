// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
// import { FaHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()
  const handleCartNavigation = () => {
    navigate('/cart')
  }

  const handleNavigateLogin=()=>{
    navigate('/login')
  }

  //   const goToFavorite = () => {
  //     navigate('/cart')
  //   }

  return (

    <>
      <div className="flex w-full items-center bg-slate-200">
        <div className="container">
          <div className="relative mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <div className="block w-10 lg:block sm:hidden  ml-24 py-5 h-16 ">

                <img
                  src="https://media.licdn.com/dms/image/C510BAQHdiY0P2Dv1oA/company-logo_200_200/0/1630628090078/netstratum_logo?e=2147483647&v=beta&t=ZKPPgE_xXaENiTe0LfuBH07kAnK6aTOa8visO3mT-nE"
                  alt="logo"
                  className="hidden dark:block"
                />
              </div>
              {/* <h3>AR STORE</h3> */}
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${open && "navbarTogglerActive"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                    } `}
                >
                  {/* <ul className="block lg:flex">
                    <li>
                        
                    </li>
                </ul> */}
                  <div className='block lg:flex '>
                    <Link to='/'>
                      <div className='hover:bg-slate-300 p-5 rounded-md '>
                        Shop
                      </div>
                    </Link>
                  </div>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                  <div onClick={handleNavigateLogin} className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white">
                    Sign in
                  </div>

                <button className='h-8 w-8   mt-2' onClick={handleCartNavigation}>
                  <FaShoppingCart className='h-full w-full ' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Navbar
{/* <nav className="bg-slate-200 border-gray-200   ">
        <div className='h-[84px] '>
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8    flex items-center  justify-between  mx-auto  my-auto mt-10">

            <div className='flex flex-wrap  justify-between items-center  md:w-1/2 md:3/4 '>
              <div  className="flex items-center space-x-3 rtl:space-x-reverse">

                <div className=" bg-custom-pink  w-[30px] h-[30px] rounded-full flex items-center justify-center">
                  {/* <FontAwesomeIcon size={16} className='text-white' icon={faClapperboard} /> */}
// </div>

// <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap ">SHOP</span>
// </div>
{/* <div className="flex md:order-2"> */ }

{/* <div className="relative w-5/6  md:w-2/3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
                  placeholder="Search movies and series"
                  value={searchInput}
                  onChange={handleInput} />
              </div> */}

{/* </div> */ }
//         </div>
//         <div onClick={goToFavorite}>
//           <button className='bg-custom-pink w-10 lg:w-[153px] h-[40px] rounded-xl' >
//             <div className='flex items-center justify-center gap-[20px]'>
//               <div>
//                 <FaHeart className='text-white' />

//               </div>
//               <div className=' hidden lg:block  '>
//                 <span className='text-white text-md'>my favorite</span>
//               </div>
//             </div>

//           </button>
//         </div>
//       </div>
//     </div>
//   </nav> */}