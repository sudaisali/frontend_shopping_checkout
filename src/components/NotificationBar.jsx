import React from 'react'

const NotificationBar = ({product , notification , notificationColor}) => {
    return (

        <div className={`fixed top-3 right-0 ${notificationColor} text-white text-center py-2 px-4 sm:w-1/2 md:w-1/3 rounded-l-lg flex items-center`}>
            <img src={product.image} alt={product.name} className="w-16 h-16 rounded-full ml-4 object-center" />
            <span className="flex-grow text-xl">{notification}</span>
        </div>


    )
}

export default NotificationBar