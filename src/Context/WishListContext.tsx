// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// // import { CartItem } from '../Types/productTypes';

// interface WishListContextType {
//     wishlist: any[];
//     addRemovelist: (product: any) => void;
//         // addToWishList: (product: any)=>any
//     // removeFromWishList: (product: any)=>any
// }

// const WishListContext = createContext<WishListContextType | undefined>(undefined);

// export const useWishList = () => {
//     const context = useContext(WishListContext);
//     return context;
// };

// interface wishListProviderProps {
//     children: ReactNode;
// }

// export const WishListProvider = ({ children }: wishListProviderProps) => {
//     const [wishlist, setwishList] = useState<any[]>([]);


//     useEffect(() => {
//         const savedWishList = JSON.parse(localStorage.getItem('wishlist') || '[]') 
//         setwishList(savedWishList);
//     }, []);

//     const addRemovelist=(product:any)=>{
//         let updatedWishlist;
//         const a=wishlist.find(item => item.id === product.id)
//         if (!a) {
//             updatedWishlist=[...wishlist,{product}]

//         } else {
//            updatedWishlist= wishlist.filter((item) => item.id !== product.id)
//         }
//         setwishList(updatedWishlist)



//     }

//     return (
//         <WishListContext.Provider value={{ wishlist,addRemovelist }}>
//             {children}
//         </WishListContext.Provider>
//     );
// };
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface WishListContextType {
    wishlist: Product[];
    addRemoveList: (product: Product) => void;
}

const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const WishListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [wishlist, setWishlist] = useState<Product[]>([]);

    const addRemoveList = (product: Product) => {
        setWishlist((prevWishlist) => {
            const isInWishlist = prevWishlist.find((item) => item.id === product.id);
            if (isInWishlist) {
                return prevWishlist.filter((item) => item.id !== product.id);
            } else {
                return [...prevWishlist, product];
            }
        });
    };

    return (
        <WishListContext.Provider value={{ wishlist, addRemoveList }}>
            {children}
        </WishListContext.Provider>
    );
};

export const useWishList = (): WishListContextType => {
    const context = useContext(WishListContext);
    if (context === undefined) {
        throw new Error('useWishList must be used within a WishListProvider');
    }
    return context;
};
