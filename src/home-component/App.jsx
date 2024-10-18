import { useState } from 'react'


import { Routes, Route} from "react-router-dom"
import ProductsContext  from '../context/ProductsContext';


import SignIn from '../registro-components/SignIn';
import Header from '../header-component/Header';
import SectionProducts from '../listProducts-component/Section_products';
import Slider from '../slider-component/Slider';
import Footer from '../footer-component/Footer'

import ProductsList from '../whishList-component/ProductsList'
import Registro from '../registro-components/Registro';
import DashboardUser from '../registro-components/DashboardUser';
import Pagina from '../page-product/Pagina';
import '../App.css'
import '../output.css'



// useEffect, permite ejecutar un codigo cuando nosotro lo necesitemos
// useMemo , evita el renderizado 
function App() {
  /* 
3. Componentes Reutilizables
Botones y Modales Reutilizables: Si tienes botones o modales en varias partes del proyecto, asegúrate de crear componentes reutilizables con propiedades (props) que controlen su apariencia y comportamiento. Por ejemplo, un componente Button podría recibir props como type, onClick, disabled, etc.
4. Estilos
CSS Modules o Styled Components: Si estás usando clases CSS globales, considera cambiar a CSS Modules o styled-components para evitar colisiones de estilos y hacer el código más modular.
Usar una biblioteca de UI: Integrar bibliotecas como Material UI o Chakra UI puede ayudarte a acelerar el desarrollo y mantener un diseño consistente en toda la aplicación.
5. Optimización de Rendimiento
Memoización de Componentes: Usa React.memo para evitar renders innecesarios en componentes que no dependen de muchos cambios de estado.
Lazy Loading y Code Splitting: Implementa carga diferida (lazy loading) y división de código para cargar solo los componentes necesarios. React ofrece React.lazy y Suspense para manejar esto de manera nativa.
6. Manejo de Errores y Mensajes de Estado
Error Boundaries: Considera usar componentes que manejen errores (Error Boundaries) para capturar excepciones y evitar que toda la aplicación se caiga.
Mensajes de carga y errores: Añade mensajes de carga y errores en las peticiones a la API o en componentes que dependen de datos externos.
7. Documentación y Readme
Aunque tienes un README.md, este se podría mejorar con más detalles, como instrucciones para clonar el proyecto, instalar dependencias, comandos disponibles y capturas de pantalla para ayudar a otros desarrolladores a entender cómo usar tu proyecto mejor​(
GitHub
)*/
  const [circle,setCircle] = useState({x:0,y:0})

  const [sliderActive, setSliderActive] = useState(true)
  const [users , setUsers] = useState([])
  const [actualUser , setActualUser] = useState(null)
  const [userLog, setUserLog] = useState(false)
  // useEffect(()=>{
  //   if(selectingPrice !== null){
  //     setTotalPrice((prevPrice)=>[...prevPrice, selectingPrice])
  //   }
  // }, [selectingPrice]) 
  // useEffect(() => {
  //   if (selectingPrice !== null && !totalPrice.includes(selectingPrice)) {
  //     setTotalPrice((prevPrice) => [...prevPrice, selectingPrice]);
  //   }
  // }, [selectingPrice, totalPrice]); // Añadimos totalPrice como dependencia
  

// Funcion del carrito



  

  // const ulRef = useRef(null)
  // const [hasChildren, setHasChildren] = useState(false)


  // useEffect(()=>{

  //   if(ulRef.current && ulRef.current.children.length > 1){
  //     setHasChildren(true)
  //   }else{
  //     setHasChildren(false)
  //   } 
  //   // setHasChildren(ulRef.current && ulRef.current.children.length > 1);
  // },[])

  // const verifyChildrenUl = hasChildren ? 'hidden' : 'block';
  // const showTotal = !hasChildren ? 'hidden' : 'flex';
  const [list, setList] = useState([])

  // const getWishList = (wishlistItems)=>{
  //   setList(wishlistItems)
  // }


  const wishItems = (_id, _image, _product, _description, _price)=>{
    const whishProduct = {
    id : _id,
    image: _image,
    product : _product,
    description : _description,
    price : _price,
    }
    // por que no cargaba, por que react es asincrono, y este recibia el dato anterior 
    // del arr, que estaba vacio, por eso debia hacer un doble click.
    setList((prevWishList) => {
        const updatedWishList = [...prevWishList, whishProduct];
        
        
        return updatedWishList;
    });
}
// VAMOS BRAIAN NO TE RINDAS!!


  return (
    <>

<ProductsContext>
    <Header 
    actualUser={actualUser} 
    setActualUser={setActualUser}
    setUserLog={setUserLog}>
    </Header>
    <main>   

        <Slider 
        setSliderActive={setSliderActive} 
        sliderActive={sliderActive}>
        </Slider>

        <Routes>
          <Route 
          path='/' 
          element={
          <SectionProducts 
          setSliderActive={setSliderActive}>
          </SectionProducts>
          }
          >
          </Route>
          <Route
            path='/products/:productId'
            element={
            <Pagina 

            actualUser={actualUser}
            onClick={wishItems} 
            setSliderActive={setSliderActive} 
            sliderActive={sliderActive}>
            </Pagina>}>
            

          </Route>
          <Route  path='/micuenta' 
          element={
          userLog 
            ?
          // en vez de volver a la seccion de producto, crear un componente que muestre datos, y registros de las compras
          <DashboardUser 
          setSliderActive={setSliderActive} 
          setUserLog={setUserLog} 
          actualUser={actualUser} 
          setActualUser={setActualUser}
          ></DashboardUser>

          :        

          <Registro  
          setSliderActive={setSliderActive} 
          setUserLog={setUserLog} 
          addUsers={setUsers} 
          users={users} 
          setActualUser = {setActualUser} 
          sliderState={setSliderActive}>
          </Registro>}>
          </Route>

          <Route path='/wishlist' 
            element={
            <ProductsList 
            setSliderActive={setSliderActive} 
            items={list}/>
            }>
          </Route> 

          <Route 
            path="/signin"
            element={
            <SignIn 
            sliderActive={sliderActive}
            setSliderActive={setSliderActive} 
            users={users}>
            </SignIn>}
            >
          </Route>
        </Routes>


  
    </main>
   
    </ProductsContext>
    <Footer></Footer>
    </>
  )
}

export default App
