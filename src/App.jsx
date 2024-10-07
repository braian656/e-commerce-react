import { useState , useEffect, useRef, useMemo } from 'react'
import { Routes, Route} from "react-router-dom"
import { Link } from 'react-router-dom';
// import SignIn from "./SignIn";
import SignIn from './registro_components/SignIn';

import SectionProducts from './Section_products';
import Footer from './Footer'
import Products from './Products'
import ModalProductsUser from './ModalProductsUser'
import ProductsList from './ProductsList'
import Registro from './registro_components/Registro';
import UserNav from './UserNav';
import DashboardUser from './registro_components/DashboardUser';
import Slider from './Slider';
import './App.css'
import './output.css'

// useEffect, permite ejecutar un codigo cuando nosotro lo necesitemos
// useMemo , evita el renderizado 
function App(DATA) {
  const [circle,setCircle] = useState({x:0,y:0})

  const [openPagProduct, setOpenPagProduct] = useState(false)

  const [actualProduct, setActualProduct] = useState({
    index : '',
    image : '',
    product : '',
    descr : '',
    total : '',
  })

  const [totalPrice , setTotalPrice] = useState([])
  const [selectingPrice, setSelectingPrice] = useState(null)
  const [modalProduct, setModalProduct] = useState(false)
  const [productCart, setProductCart] = useState([]);
  const [sliderActive, setSliderActive] = useState(true)
  const [users , setUsers] = useState([])
  const [actualUser , setActualUser] = useState(null)
  const [userLog, setUserLog] = useState(false)
  // users, contiene los datos de los usuarios
  // como hago para que si el usuario se registro mostrarlo?
  console.log('Usuarios registrados, actualmente', users)
  const productsSelecting = (id,image,product,price)=>{
    setSelectingPrice(price)
    const item = {id:id, value:product, cost:price, img:image}
    setProductCart([...productCart, item])
  }


  const renderTotalPrice = useMemo(() => {
  return totalPrice.reduce((acc, curr) => acc + curr, 0);
  }, [totalPrice]);


  // useEffect(()=>{
  //   if(selectingPrice !== null){
  //     setTotalPrice((prevPrice)=>[...prevPrice, selectingPrice])
  //   }
  // }, [selectingPrice]) 
  useEffect(() => {
    if (selectingPrice !== null && !totalPrice.includes(selectingPrice)) {
      setTotalPrice((prevPrice) => [...prevPrice, selectingPrice]);
    }
  }, [selectingPrice, totalPrice]); // Añadimos totalPrice como dependencia
  


  const removeProductFromCart = (id)=>{

    const removeProduct = productCart.filter((product) => product.id !== id)
    setProductCart(removeProduct)

  }


  const seeModalProduct = (event)=>{
    event.stopPropagation()
    setModalProduct(!modalProduct)
  }


  const modalShow = modalProduct ? 'block translate-y-0 opacity-100 z-40' : 'hidden -translate-y-full -z-10 opacity-0'

  // const boxRef = useRef(null)

  // const handleClickOutside =(e)=>{
  //   // UserRef no se renderiza, accede al dom por medio de document.querySelector de una forma controlada

  //   // guardar un valor, que quieras que sobreviva a los render

  //   if(boxRef.current && !boxRef.current.contains(e.target)){
  //     setModalProduct(false)
  //   }

  // }

  const ulRef = useRef(null)
  const [hasChildren, setHasChildren] = useState(false)


  useEffect(()=>{

    if(ulRef.current && ulRef.current.children.length > 1){
      setHasChildren(true)
    }else{
      setHasChildren(false)
    } 
    // setHasChildren(ulRef.current && ulRef.current.children.length > 1);
  },[])

  const verifyChildrenUl = hasChildren ? 'hidden' : 'block';
  const showTotal = !hasChildren ? 'hidden' : 'flex';
  // useEffect(()=>{

  //   const circleMouse = (event)=>{
  //   setCircle({x: event.clientX, y: event.clientY})
  //   }

  //   window.addEventListener('mousemove', circleMouse)

  
  //   return(
  //     window.removeEventListener('mousemove', circleMouse)
  //   )
  // },[])

const pagProduct = (_id, _image, _product, _description, _price)=>{

  setActualProduct(({
    index : _id,
    image : _image,
    product : _product,
    descr : _description,
    total : _price,
  }));
  setOpenPagProduct(true)
  
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



const showProduct = DATA.DATA.map((item)=>(
  <Products
  id={item.id}
  key={item.id}
  image={item.img}
  product={item.producto} 
  description={item.descripcion}
  price={item.precio}
  onClick = {productsSelecting}
  onClickPag = {pagProduct}
  ></Products>
))

const [list, setList] = useState([])

const getWishList = (wishlistItems)=>{
  setList(wishlistItems)
}

console.log('Flag de registro', userLog)

  return (
    <>
    {/* <div style={{
      position: 'absolute',
      top:'-25px',
      left:'-25px',
      width:'50px',
      height: '50px',
      borderRadius: '50%',
      border: '2px solid red',
      transform: `translate(${circle.x}px, ${circle.y}px)`,
      zIndex:'200',

    }} ></div> */}
    <header className='bg-button p-2'>

      <nav className='flex justify-between items-center z-50'>
        <h2 className="logo text-red-500 font-extrabold">E-comm</h2>
        
        <ul className='hidden sm:flex sm:items-center'>
          <li>
            <Link to="/" className='text-anchor font-bold py-2 px-4'>
              INICIO
            </Link>
          </li>
          {/*<li>
            <Link to="/" className='text-anchor font-bold py-2 px-4'>
              CATEGORIAS
            </Link>
          </li>
           */}
          
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
        className='bg-button2 px-1 py-2 ease-out duration-700 hover:bg-button hover:scale-105 hover:text-white'
        onClick={seeModalProduct}>
          <span>{productCart.length}</span>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </nav>
      {actualUser !== null ? <UserNav setUserLog={setUserLog} actualUser={actualUser} setActualUser={setActualUser}></UserNav> : null}

      <div 
        className={`${modalShow} 
        transition duration-700 
        ease-[cubic-bezier(0.4, 0, 0.2, 1)]  
        w-full 
        absolute
        left-0 
        top-[6.5rem] 
        user-product 
        bg-modal 
        p-2 
        min-h-auto`}>
        <ul ref={ulRef}>

          <h1 className={`${verifyChildrenUl} text-center font-semibold text-4xl p-3 text-text`}>
            Vacio
          </h1>
          {showShoppingCart}

        
          
        </ul>
        
        <div className={`${showTotal} total_price justify-around items-center`}>

            <span className="total_title text-text">Total</span>
            <span className="total text-button2 font-semibold text-3xl">
              ${totalPrice.length === 0 ? null : renderTotalPrice}
            </span>

        </div>
      </div>
  
    </header>


   {/* Poner una seccion con slider y debajo unas card de envios */}
    <main>   
    {/* {sliderActive && <Slider></Slider>} */}

            {/* arreglar las banderas de mi slider */}
      {/* problema si voy a 'MI LISTA' y luego quiero ir a 'INICIO, me va aparecer lo ultimo que vi antes de ir a 'MI LISTA' */}
        <Routes>
          <Route 
          path='/' 
          element={
          <SectionProducts 
          openPagProduct={openPagProduct} 
          showProduct={showProduct} 
          actualProduct={actualProduct}
          funcAdd={getWishList}
          slider={sliderActive}
          sliderState={setSliderActive}>
          </SectionProducts>}
          >
          </Route>

          <Route  path='/micuenta' element={
          userLog 
            ?
          // en vez de volver a la seccion de producto, crear un componente que muestre datos, y registros de las compras
          <DashboardUser 
          setUserLog={setUserLog} 
          actualUser={actualUser} 
          setActualUser={setActualUser}
          ></DashboardUser>

          :        

          <Registro  
          setUserLog={setUserLog} 
          addUsers={setUsers} 
          users={users} 
          setActualUser = {setActualUser} 
          sliderState={setSliderActive}>
          </Registro>}>
{/* element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} */}
          </Route>

          <Route path='/wishlist' 
          element={
          <ProductsList 
            slider={sliderActive}
            sliderState={setSliderActive}
            items={list}/>
          }>
          </Route> 

          <Route 
            path="/signin"

            element={<SignIn  users={users}></SignIn>}
            >
            </Route>
        </Routes>


  
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
