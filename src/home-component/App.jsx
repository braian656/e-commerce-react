// hooks
import { useCallback, useState } from 'react'

// React Route
import { Routes, Route} from "react-router-dom"


// Components
import SignIn from '../registro-components/SignIn';
import Header from '../header-component/Header';
import SectionProducts from '../listProducts-component/Section_products';
import Slider from '../slider-component/Slider';
import Footer from '../footer-component/Footer'
import ProductsList from '../whishList-component/ProductsList'
import Registro from '../registro-components/Registro';
import DashboardUser from '../registro-components/DashboardUser';
import Pagina from '../page-product/Pagina';
import ContainerCardHome from './ContainerCardHome';
import Pagination  from '../pagination-btns/PaginationBtns';

// CSS
import '../App.css'
import '../output.css'

// Provider
import ProductsContext  from '../context/ProductsContext';


function App() {
  const [activeComponents, setActiveComponents] = useState(true)



  const [actualUser , setActualUser] = useState(null)


  /*Usuario Logeado*/
  const [userLog, setUserLog] = useState(false) 

  const [list, setList] = useState([])

  const wishItems = (_id, _image, _product, _description, _price,_cantidad,_color)=>{
    const whishProduct = {
    id : _id,
    image: _image,
    product : _product,
    description : _description,
    price : _price,
    quantity : _cantidad,
    color : _color
    }
  
    setList((prevWishList) => {
        const updatedWishList = [...prevWishList, whishProduct];
        
        
        return updatedWishList;
    });
}

// el slider se renderiza todo el tiempo
// solo se debe renderizar cuando este en el home
// mover los estados del componentes a context
// el estado de slider cambia constantemente


  return (
    <>

    
      <ProductsContext>
      
      <Header 
      actualUser={actualUser} 
      setActualUser={setActualUser}
      setUserLog={setUserLog}>
      </Header>
      <main className='bg-body'>   

        {/* El estado es true los componentes se muestran */}
        {/* verifican que sea true para mostrar */}
        {activeComponents && <Slider activeComponents={activeComponents}></Slider>}
        {activeComponents && <ContainerCardHome activeComponents={activeComponents}></ContainerCardHome>}

        {/* En SectionProcuts se usa el estado activeComponents, para cambiarlo a true */}
          <Routes>
            <Route 
            path='/' 
            element={
            
            <SectionProducts 
              activeComponents={activeComponents}
              setActiveComponents={setActiveComponents}
              >
            </SectionProducts>
            }
            >
            </Route>


            {/* En pagina activeComponents es false, se ocultan */}
            {/* doble renderizacion */}
            <Route
              path='/products/:productId'
              element={
              
              <Pagina 
              actualUser={actualUser}
              onClick={wishItems} 
              setActiveComponents={setActiveComponents}>
              </Pagina>
            }>
            </Route>


            
            <Route path='/micuenta' 
            element={
            userLog 

              ?
            // en vez de volver a la seccion de producto, crear un componente que muestre datos, y registros de las compras
            <DashboardUser             
            setUserLog={setUserLog} 
            actualUser={actualUser} 
            setActualUser={setActualUser}>
            </DashboardUser>

            :        
            
            <Registro  
            activeComponents={activeComponents}
            setActiveComponents={setActiveComponents}
            setUserLog={setUserLog} 
            setActualUser={setActualUser}>
            </Registro>
          }>

            </Route>

            <Route path='/wishlist' 
              element={

                // whislIst COmponente
              <ProductsList 
              actualUser = {actualUser}
              setActiveComponents={setActiveComponents}
              items={list}
              setList={setList}/>
              }>
            </Route> 


              {/* componente registrarse */}
            <Route 
              path="/signin"
              element={activeComponents && <SignIn activeComponents={activeComponents} setActiveComponents={setActiveComponents}></SignIn>}>
            </Route>

          </Routes>



        {/* COmponente pagination */}
        {activeComponents && <Pagination activeComponents={activeComponents} setActiveComponents={setActiveComponents}></Pagination>}
          
      </main>

    
      </ProductsContext>
    
    <Footer></Footer>


    </>
  )
}

export default App
