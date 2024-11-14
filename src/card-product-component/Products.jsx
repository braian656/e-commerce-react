import { useContext } from "react"
import { contextProducts } from "../context/context"
import { Link } from "react-router-dom"
import ServerError from '../errors-component/ServerError'
import Error from "../errors-component/Error"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

import { useSelector,useDispatch} from "react-redux"
import { addProduct, resetMessage} from "../store/features/cart"

function Products(){


  const {
    productData,
    pagProduct, 
    firstIndex, 
    lastIndex, 
    someErr, 
    userSelectedCategory,
    activeItemId,
    setActiveItemId,
    setTotalPrice,
    setSelectingPrice,
    
  } = useContext(contextProducts)


  const cartState = useSelector((state)=> state.items)
  const message = useSelector((state) => state.handleCart.message)
  const dispatch = useDispatch()


  const [modalVisible, setModalVisible] = useState(true) 

  const category = productData.filter((product) => {

    if(userSelectedCategory?.includes('All')){
      return product
    }
    if(product.category === userSelectedCategory){
      return product
    }

  })

  console.log(category)

  const addToCart = (id, image, product, price)=>{    
    const item = {
      id:id, 
      value:product, 
      cost:price, 
      img:image
    }


    setSelectingPrice(item.cost)
    setActiveItemId(prevId => (prevId === id ? null : id));
    dispatch(addProduct(item))
  }
    // problema a solucionar, cuando el la categoraia All, paso a los siguientes productos, y luego
    // presiono otra categoria, la categoria no aparece
  const showProduct = category.map((product)=>(

            <article 
            key={product.id} 
            id={product.id} 
            className="cursor-pointer w-full sm:w-[380px] shadow-lg bg-white m-3 hover:drop-shadow-lg">
              
              <Link 
              to={`/products/${product.id}/`}>

              <div 
                onClick={
                ()=>
                pagProduct(product.id, product.image, product.title, product.description, product.price, product.category,product.rating.rate)
                }>
                <div className='pic bg-white h-60 p-1'>

                  <img 
                  className="w-full h-full object-contain" 
                  src={product.image} 
                  alt={product.title} />


                </div>

                <div className="flex items-center justify-between flex-col">

                  <h2 
                  className="py-2 h-[100px] font-semibold uppercase	text-lg text-center text-button tracking-widest w-full">
                    {product.title}
                  </h2>

                  <span className="text-2xl py-2 font-bold text-[#736969] leading-5">
                    {product.price}$
                  </span>  

                </div>

            
              </div>

            
              </Link>
              {activeItemId === product.id && (
                <p className="active_animation">PRODUCTOR AÑADIDO</p>

              )}
                <button 
                onClick={
                  ()=>
                    addToCart(product.id, product.image, product.title, product.price)
                } 
                className="add_to_cart_btn w-full duration-200 text-sm bg-button2 text-white font-bold py-2 px-4 hover:bg-button z-50 hover:bg-text">
                
                ADD TO CART
              </button>
            </article>


  )).slice(firstIndex, lastIndex)



  const handleModal = ()=>{
    setModalVisible(true)
    dispatch(resetMessage())
  }

  console.log(showProduct)

    return (
    <>
      
    {
      
      message ?
      <Error 
      visible={modalVisible} 
      handleModal={handleModal}
      messageModal={message}
      txtButton="ACEPTAR"
      colorBtn="bg-button2"
      title="UPSSS...!"
      image="./images/close.svg">
      </Error>
      :
      null
    }
    
      {
      productData.length == 0 ? 
      <ServerError 
      error={someErr}>
      </ServerError>
      : 
      showProduct
      }
    </>
    )
}


export default Products