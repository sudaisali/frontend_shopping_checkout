import React, { useContext , useState} from 'react'
import { CartContext } from '../context/Cart'
import NotificationBar from './NotificationBar';


const ProductCard = ({ product }) => {
    const cart = useContext(CartContext)
    const [notification, setNotification] = useState('');
    const [notificationColor, setNotificationColor] = useState('');
    const [isOutOfStock, setIsOutOfStock] = useState(product.quantity <= 0);


    const handleAddToCart = (product) => {
        if(cart.isavaliable(product))
            {cart.addOneItem(product);
            
        setNotification(`Product has been added to your cart.`);
        setNotificationColor(`bg-gray-800`)
        
    }
    else{
        setNotification(`Product is not available.`);
        setNotificationColor('bg-red-500');

    }
    setTimeout(() => {
        setNotification('');
    }, 500);
    };

    
    return (
        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              {notification && (
                <NotificationBar product={product} notification={notification} notificationColor={notificationColor}></NotificationBar>
            )}
            <div className="flex justify-center items-center h-40">
                <img src={product.image} alt={product.name} className="w-50 h-40 object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold truncate-multiline h-8">{product.name}</h2>
                <p className="mt-2 text-gray-600 truncate-multiline">{product.description}</p>
                <div className="mt-4 flex fle-row items-center justify-between">
                    <span className="text-xl font-bold text-gray-800">${product.price}</span>
                    {isOutOfStock ? (
                        <span className="text-red-500">Out of Stock</span>
                    ) : (
                        <button
                            className="bg-gray-800 text-white rounded-lg px-2 py-2"
                            onClick={() => {
                                handleAddToCart(product);
                            }}
                        >
                            Add To Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard