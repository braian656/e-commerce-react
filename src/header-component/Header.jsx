import { Link } from 'react-router-dom';
import { useContext, useRef, useEffect, useState } from 'react';
import { contextProducts } from '../context/context';
import { AlignJustify } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/features/cart';


import ModalProductsUser from '../nav-component/ModalProductsUser';
import UserNav from '../nav-component/UserNav';
import EmptyCart from '../errors-component/EmpyCart'
import '../index.css'


function Header({ actualUser,setUserLog, setActualUser}){
  // Eliminar los estados: productCart,setProductCart, text (en caso de que funcione)
    const {
      productCart,
      setProductCart,
      totalPrice, 
      setTotalPrice,
      renderTotalPrice} = useContext(contextProducts)
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState(false)


    const myCart = useSelector((state)=> state.handleCart.items)
    const dispatch = useDispatch()

    const removeProductFromCart = (id, price)=>{

        dispatch(removeProduct(id))
        
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
    console.log(totalPrice)
    const showShoppingCart = myCart.map((pr)=>(
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
        console.log('EEE')
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
        if(!boxUserProduct.current.contains(e.target)
          && !buttonSeeModal.current.contains(e.target)){
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



    const closeMenu = (event)=>{
    
      if(event.target.dataset && event.target.dataset.type == 'link') setMenuOpen(false)

      
    }
   
    return(
      <header className='bg-button p-2 sticky z-50 top-0 overflow-hidden'>

        <nav className='flex justify-between items-center '>
          <div className="logo w-10 h-10 z-50">
          <Link to="/">
            <img className='w-full h-full' data-type="img" src="./images/ecommerce.svg" alt="e-commerce" />
          </Link>
            
          </div>
          
          <ul 
          onClick={closeMenu}
          className={`menu-sm ${handleClassMenu} bg-button sm:relative sm:top-0 sm:translate-y-0 sm:w-auto sm:h-auto sm:flex sm:flex-row sm:items-center sm:justify-center z-40`}>
            
            <li className='mb-5 sm:mb-0 ' >
              <Link 
              to="/" 
              data-type="link"
              className='text-anchor font-bold py-2 px-4'>
                INICIO
              </Link>
            </li>

            <li className='mb-5 sm:mb-0' >
              <Link 
              data-type="link"
              to="/wishlist" 
              className='text-anchor font-bold py-2 px-4'>
                MI LISTA
              </Link>        
            </li>

            <li className='bg-body px-1 py-2 mb-5 text-text rounded-lg sm:mb-0'>
              <Link 
              data-type="link"
              to="/micuenta" 
              className='text-button font-bold py-2 px-4'>
                MI CUENTA
              </Link>
            </li>
            
          </ul>  


        


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
            className='btn-cart z-50 bg-body rounded-lg px-1 py-2 ease-out duration-700 border-2
            border-transparent hover:border-button2 
            hover:bg-button hover:scale-105 hover:text-button2'
            onClick={seeModalProduct}>

              <span className='text-red-500 px-1 font-semibold rounded-md -z-10'>
                {myCart.length}
              </span>
              
              <i className="fa-solid fa-cart-shopping -z-10"></i>

            </button>
            
            <button 
            className='btn-menu z-50 sm:hidden'
            onClick={openMenu}>   
            
            
            <AlignJustify 
             size={32} 
             color="#2b2c30"/>

            </button>
          </div>
        </nav>

        <div 
        className={`${modalShow}`}>
          
          <ul 
          className='heirate-mich'
          ref={boxUserProduct}>
            {
              Object.values(myCart).length == 0
              ? 
              <EmptyCart 
                text="Looks like you haven't added anything to your cart yet.">
              </EmptyCart> 
              : 
              ''
              }
            {showShoppingCart}            
          </ul>
          
          <div className={`${hanndleClassTotal} text-white bg-button2 p-2 rounded-lg total_price justify-around items-center`}>
  
              <span className="total_title">Total</span>
              <span className="total font-normal text-xl">
                ${totalPrice.length === 0 ? null : renderTotalPrice}
              </span>
  
          </div>
        </div>
    
      </header>
    )
}


export default Header