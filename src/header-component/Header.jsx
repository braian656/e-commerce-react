import { Link } from 'react-router-dom';
import { useContext, useRef, useEffect, useState } from 'react';
import { contextProducts } from '../context/context';
import { ChevronDown } from 'lucide-react'
import ModalProductsUser from '../nav-component/ModalProductsUser';
import UserNav from '../nav-component/UserNav';
import EmptyCart from '../errors-component/EmpyCart'
import c from 'croppie';


function Header({ actualUser,setUserLog, setActualUser}){
    const {productCart,setProductCart, totalPrice, setTotalPrice,renderTotalPrice} = useContext(contextProducts)
  
    const [menuOpen, setMenuOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState(false)

    const removeProductFromCart = (id, price)=>{

        const removeProduct = productCart.filter((product) => product.id !== id)   
        setProductCart(removeProduct)
  
        setTotalPrice((prevPrice)=>{
            const index = prevPrice.indexOf(price)
  
            if(index > -1){
              const updatePrice = [...prevPrice]
              updatePrice.splice(index, 1)
              console.log('Remueve el precio?',updatePrice)
              return updatePrice
            }
  
  
            return prevPrice
        })

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

    const openMenu = ()=>{
      setMenuOpen(!menuOpen)
      console.log('Esta el carro abiero?',modalProduct)

      if(modalProduct === true){
        setModalProduct(false)
      }

    }

    const seeModalProduct = (event)=>{
      // event.stopPropagation()
      console.log('que mierda esta pasando aca')
      setModalProduct(!modalProduct)
      if(menuOpen === true){
        setMenuOpen(false)
      }
      
    }
    const modalShow = modalProduct ? 'block translate-y-0  transition duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] opacity-100 z-40' : 'hidden -translate-y-full -z-10 opacity-0'
    // const handleClassMenu = menuOpen ? '-translate-y-full z-10' : 'translate-y-0 z-50'
    const handleClassMenu = menuOpen ? 'translate-y-0 z-50' : '-translate-y-full z-10'

    const hanndleClassTotal =  totalPrice.length === 0 ? 'hidden' : 'flex'
  
    const boxUserProduct = useRef(null)
    const buttonSeeModal = useRef(null)

    useEffect(()=>{
      const handleClick = (e)=>{
        if(e.target !== boxUserProduct.current && e.target !== buttonSeeModal.current){
          setModalProduct(false)
        }else{
          seeModalProduct(true)
        }
      }

      window.addEventListener('click', handleClick)

      return () => {
        window.removeEventListener('click', handleClick);
      };
    },[])


    return(
      <header className='bg-button p-2 fixed z-50 right-0 left-0'>

        <nav className='flex justify-between items-center '>
          <h2 className="logo text-red-500 font-extrabold z-50">E-comm</h2>
          
          <ul className={`menu-sm ${handleClassMenu} bg-button sm:relative sm:top-0 sm:translate-y-0 sm:w-auto sm:h-auto sm:flex sm:flex-row sm:items-center sm:justify-center z-40`}>
            
            <li className='mb-5 sm:mb-0'>
              <Link to="/" className='text-anchor font-bold py-2 px-4'>
                INICIO
              </Link>
            </li>
            <li className='mb-5 sm:mb-0'>
              <Link to="/wishlist" className='text-anchor font-bold py-2 px-4'>
                MI LISTA
              </Link>        
            </li>
            <li className='bg-button2 px-1 py-2 mb-5 text-text sm:mb-0'>
              <Link to="/micuenta" className='text-anchor font-bold py-2 px-4'>
                MI CUENTA
              </Link>
            </li>
            
          </ul>  
          <button 
          className='z-50 sm:hidden'
          onClick={openMenu}>      
            <ChevronDown size={32} color="rgb(228 188 44)" />
          </button>
          <button 
          ref={buttonSeeModal}
          className='bg-button2 z-50 px-1 py-2 ease-out duration-700 border-2 border-transparent hover:border-solid hover:border-button2 hover:bg-button hover:scale-105 hover:text-button2'
          onClick={seeModalProduct}>
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
          ref={boxUserProduct}
          className={
          `${modalShow} 
          w-full 
          absolute
          left-0 
          top-[3.7rem] 
          user-product 
          bg-modal 
          p-2 
          min-h-auto`}>
          <ul>
  
            <h1 className={`text-center font-semibold text-2xl p-3 text-text`}>
              {Object.values(productCart).length == 0 ? <EmptyCart></EmptyCart> : ''}
            </h1>
            {showShoppingCart}
  
          
            
          </ul>
          
          <div className={`${hanndleClassTotal} total_price justify-around items-center`}>
  
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