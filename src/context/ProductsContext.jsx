
import { useState, useEffect , useMemo} from "react"
import { contextProducts } from "./context"


const ProductsContext = ({children})=>{

    const [ productData, setProductData ]= useState([])


    const totalProducts = productData.length; /*Cantidad de Prodcutos*/
    const [productsPerPage, setProductsPerPage] = useState(6); /*Cantidad de productos que se van a mostrar*/
    const [currentPage, setCurrentPage] = useState(1) /* Pagina actual De la paginacion */

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    const [openPagProduct, setOpenPagProduct] = useState(false)
    // actualProduct, muestra la informacion del producto en una pag nueva
    const [actualProduct, setActualProduct] = useState({
      index : '',
      image : '',
      product : '',
      descr : '',
      total : '',
    })

    const [totalPrice , setTotalPrice] = useState([])

    const [selectingPrice, setSelectingPrice] = useState(null)
    const [productCart, setProductCart] = useState([]);
    const [textErr, setTextErr] = useState('')
    const [categories, setCategories] = useState([])
    const [userSelectedCategory, setUserSelectedCategory] = useState(['All'])
    const [someErr, setSomeErr] = useState('')
    const [purchasedProducts , setPurchasedProducts] = useState([])
    const [picUser, setPicUser] = useState('/images/profile.png')
    const getApiProducts = async()=>{
     try{
      const data = await fetch('https://fakestoreapi.com/products')
      const prod = await data.json()

      
      setProductData(prod)

      prod.forEach(element => {
        return setCategories(element.category)
      });

     }catch(error){
      console.log('Error', error)
      setSomeErr('Algo salio Mal...')
     }
    }

    useEffect(()=>{
      getApiProducts()

    },[])

    const pagProduct = (_id, _image, _product, _description, _price,_category)=>{
      
      console.log(_category)
      setActualProduct(({
        index : _id,
        image : _image,
        product : _product,
        descr : _description,
        total : _price,
        productCategory : _category
      }));
      setOpenPagProduct(true)
      
    }
   

    const productsSelecting = (id,image,product,price)=>{
      const buscarDuplicado = productCart.find((product)=> product.id == id)

      if(!buscarDuplicado){

        const item = {id:id, value:product, cost:price, img:image}

        setProductCart((prevProduct) => [...prevProduct, item]);
  
        
        setSelectingPrice(item.cost)

      }else{
        setTextErr('Producto Ya añadido')
        return
      }

  
    }
    
    const renderTotalPrice = useMemo(() => {
      const sumProducts = totalPrice.reduce((acc, curr) => acc + curr, 0);
      return sumProducts
      }, [totalPrice]);
    
    
    useEffect(() => {
      if (selectingPrice !== null && !totalPrice.includes(selectingPrice)) {
        setTotalPrice((prevPrice) => [...prevPrice, selectingPrice]);
        setSelectingPrice(null)
        // no lo limpiada, por eso quedaba guardado el ultimo numeoro
      }
    }, [selectingPrice, totalPrice]); 
    // Añadimos totalPrice como dependencia
    
  

    return(

        <contextProducts.Provider
        value={{
          productData, 
          setProductData, 
          pagProduct, 
          productsSelecting, 
          productCart,
          setProductCart,
          totalPrice,
          setTotalPrice,
          actualProduct,
          setActualProduct,
          renderTotalPrice,
          openPagProduct,
          setOpenPagProduct,
          textErr,
          totalProducts,
          productsPerPage,
          currentPage,
          setCurrentPage,
          lastIndex, 
          firstIndex,
          categories,
          someErr,
          userSelectedCategory,
          setUserSelectedCategory,
          purchasedProducts,
          setPurchasedProducts,
          picUser,
          setPicUser
        }}>

        {children}

        </contextProducts.Provider>
    )
}

export default ProductsContext