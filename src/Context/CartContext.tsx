// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { CartItem } from '../Types/productTypes';

// interface CartContextType {
//     cart: CartItem[];
//     addToCart: (product: CartItem) => void;
//     removeFromCart: (productId: number) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };

// interface CartProviderProps {
//     children: ReactNode;
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//     const [cart, setCart] = useState<CartItem[]>([]);

//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
//         setCart(savedCart);
//     }, []);

//     const addToCart = (product: CartItem) => {
//         const existingProductIndex = cart.findIndex((item) => item.id === product.id);
//         let updatedCart;

//         if (existingProductIndex !== -1) {
//             updatedCart = cart.map((item, index) =>
//                 index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
//             );
//         } else {
//             updatedCart = [...cart, { ...product, quantity: 1 }];
//         }

//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const removeFromCart = (productId: number) => {
//         const updatedCart = cart.filter((item) => item.id !== productId);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { CartItem } from '../Types/productTypes';

// interface CartContextType {
//     cart: CartItem[];
//     addToCart: (product: CartItem) =>any
//     removeFromCart: (productId: CartItem)=>any
//     decrementQuantity: (product: CartItem) => any;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };

// interface CartProviderProps {
//     children: ReactNode;
// }

// export const CartProvider = ({ children }: CartProviderProps) => {
//     const [cart, setCart] = useState<CartItem[]>([]);

//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
//         setCart(savedCart);
//     }, []);

//     const addToCart = (product: CartItem) => {
//         const existingProductIndex = cart.findIndex((item) => item.id === product.id);
//         let updatedCart;

//         if (existingProductIndex !== -1) {
//             updatedCart = cart.map((item, index) =>
//                 index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
//             );
//         } else {
//             updatedCart = [...cart, { ...product, quantity: 1 }];
//         }

//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const decrementQuantity = (product: CartItem) => {
//         const existingProductIndex = cart.findIndex((item) => item.id === product.id);
//         if (existingProductIndex !== -1) {
//             let updatedCart = cart.map((item, index) =>
//                 index === existingProductIndex ? { ...item, quantity: item.quantity - 1 } : item
//             ).filter((item) => item.quantity > 0); // Remove item if quantity becomes 0

//             setCart(updatedCart);
//             localStorage.setItem('cart', JSON.stringify(updatedCart));
//         }
//     };

//     const removeFromCart = (product: CartItem) => {
//         console.log('bafore',cart.length,'id',product);
        
//         const updatedCart = cart.filter((item) => item.id !== product.id)
//         console.log('bafore',updatedCart.length);
        
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, decrementQuantity , removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '../Types/productTypes';

interface CartContextType {
    cart: CartItem[];
    total:any
    addToCart: (product: CartItem) =>any
    removeFromCart: (productId: CartItem)=>any
    decrementQuantity: (product: CartItem) => any;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>();


    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(newTotal);
      }, [cart]);

    const addToCart = (product: CartItem) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        let updatedCart;

        if (existingProductIndex !== -1) {
            updatedCart = cart.map((item, index) =>
                index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];

        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decrementQuantity = (product: CartItem) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            let updatedCart = cart.map((item, index) =>
                index === existingProductIndex ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0); // Remove item if quantity becomes 0

            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    const removeFromCart = (product: CartItem) => {
        console.log('bafore',cart.length,'id',product);
        
        const updatedCart = cart.filter((item) => item.id !== product.id)
        console.log('bafore',updatedCart.length);
        
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <CartContext.Provider value={{ cart,total, addToCart, decrementQuantity , removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

