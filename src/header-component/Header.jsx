import { Link } from 'react-router-dom';
import { useContext, useRef, useEffect, useState } from 'react';
import { contextProducts } from '../context/context';
import { ChevronDown } from 'lucide-react'
import ModalProductsUser from '../nav-component/ModalProductsUser';
import UserNav from '../nav-component/UserNav';
import EmptyCart from '../errors-component/EmpyCart'
import c from 'croppie';
import '../index.css'


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
    const modalShow = modalProduct ? 'active-cart' : 'cart'
    // const handleClassMenu = menuOpen ? '-translate-y-full z-10' : 'translate-y-0 z-50'
    const handleClassMenu = menuOpen ? 'translate-y-0 z-50' : '-translate-y-full -z-10'

    const hanndleClassTotal =  totalPrice.length === 0 ? 'hidden' : 'flex'
  
    const boxUserProduct = useRef(null)
    const buttonSeeModal = useRef(null)

    useEffect(()=>{


      const handleClick = (e)=>{    
        if(!boxUserProduct.current.contains(e.target) && !buttonSeeModal.current.contains(e.target)){
          setModalProduct(false)
        } else{
          setModalProduct(true)
        }
      }

      window.addEventListener('click', handleClick)

      return () => {
        window.removeEventListener('click', handleClick);
      };
    },[])


    return(
      <header className='bg-button p-2 sticky z-50 top-0 overflow-hidden'>

        <nav className='flex justify-between items-center '>
          <div className="logo w-10 h-10 z-50">
          <Link to="/">
            <img className='w-full h-full ' src="../images/ecommerce.svg" alt="" />
          </Link>
            
          </div>
          
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
            className='btn-menu z-50 sm:hidden'
            onClick={openMenu}>      
            <ChevronDown size={32} color="#f2f2f2" />
          </button>


          <div className="btns-cart flex z-50">


            {actualUser !== null 
            
            ? 

            <UserNav 
            setUserLog={setUserLog} 
            actualUser={actualUser} 
            setActualUser={setActualUser}
            ></UserNav>

            : 
            null}

            <button 
            ref={buttonSeeModal}
            className='btn-cart z-50 bg-button2 px-1 py-2 ease-out duration-700 border-2
            border-transparent hover:border-solid hover:border-button2 
            hover:bg-button hover:scale-105 hover:text-button2'
            onClick={seeModalProduct}>

              <span className='text-red-500 px-1 font-semibold rounded-md -z-10'>
                {productCart.length}
              </span>
              
              <i className="fa-solid fa-cart-shopping -z-10"></i>

            </button>

          </div>
        </nav>

        <div 
        className={`${modalShow}`}>
          
          <ul 
          className='heirate-mich'
          ref={boxUserProduct}>
            {
              Object.values(productCart).length == 0
              ? 
              <EmptyCart 
                text="Looks like you haven't added anything to your cart yet.">
              </EmptyCart> 
              : 
              ''
              }
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