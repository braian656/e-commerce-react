import { Link } from 'react-router-dom';
import { useContext, useRef, useEffect } from 'react';
import { contextProducts } from '../context/context';
import ModalProductsUser from '../nav-component/ModalProductsUser';
import UserNav from '../nav-component/UserNav';
import EmptyCart from '../errors-component/EmpyCart'
import c from 'croppie';


function Header({onClick, actualUser,modalShow,setUserLog, setActualUser}){
    const {productCart,setProductCart, totalPrice, setTotalPrice,renderTotalPrice} = useContext(contextProducts)

    const removeProductFromCart = (id, price)=>{

      const removeProduct = productCart.filter((product) => product.id !== id)   

      const indexPrice = totalPrice.indexOf(price)
      const removePrice = totalPrice.splice(indexPrice,1)

      setTotalPrice(removePrice)
      setProductCart(removeProduct)
    }


    const showShoppingCart = productCart.map((pr)=>(
      <ModalProductsUser
          key={pr.id} 
          id={pr.id} 
          image={pr.img} 
          product={pr.value} 
          price={pr.cost}
          onClick={removeProductFromCart}>    
      </ModalProductsUser>
    ))


    return(
      <header className='bg-button p-2'>

        <nav className='flex justify-between items-center z-50'>
          <h2 className="logo text-red-500 font-extrabold">E-comm</h2>
          
          <ul className='hidden sm:flex sm:items-center'>
            <li>
              <Link to="/" className='text-anchor font-bold py-2 px-4'>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className='text-anchor font-bold py-2 px-4'>
                MI LISTA
              </Link>        
            </li>
            <li className='bg-button2 px-1 py-2 text-text'>
              <Link to="/micuenta" className='text-anchor font-bold py-2 px-4'>
                MI CUENTA
              </Link>
            </li>
  
          </ul>  
  
          <button 
          className='bg-button2 px-1 py-2 ease-out duration-700 border-2 border-transparent hover:border-solid hover:border-button2 hover:bg-button hover:scale-105 hover:text-button2'
          onClick={onClick}>
            <span className='text-red-500 px-1 font-semibold rounded-md'>{productCart.length}</span>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </nav>
        {actualUser !== null 
        
        ? 

        <UserNav 
        setUserLog={setUserLog} 
        actualUser={actualUser} 
        setActualUser={setActualUser}
        ></UserNav>

        : null}
  
        <div 
          className={`${modalShow} 
          w-full 
          absolute
          left-0 
          top-[3.7rem] 
          user-product 
          bg-modal 
          p-2 
          min-h-auto`}>
          <ul>
  
            <h1 className={` text-center font-semibold text-2xl p-3 text-text`}>
              {Object.values(productCart).length == 0 ? <EmptyCart></EmptyCart> : ''}
            </h1>
            {showShoppingCart}
  
          
            
          </ul>
          
          <div className={`flex total_price justify-around items-center`}>
  
              <span className="total_title text-text">Total</span>
              <span className="total text-button2 font-normal text-xl">
                ${totalPrice.length === 0 ? null : renderTotalPrice}
              </span>
  
          </div>
        </div>
    
      </header>
    )
}


export default Header