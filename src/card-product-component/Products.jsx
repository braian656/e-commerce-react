import { useContext } from "react"
import { contextProducts } from "../context/context"
import { Link } from "react-router-dom"
import ServerError from '../errors-component/ServerError'
function Products(){


  const {productData,pagProduct, productsSelecting, productCart, firstIndex, lastIndex, someErr, userSelectedCategory} = useContext(contextProducts)
  // el onClickPag, usa un estado actualProduct, para guardar la info de los product
  // y luego mostrarlos, en un tercer nivel <Pagina>
  // <Link to={`/products/${product.id}`}>{product.name}</Link>
  console.log('Categoria seleccionada y a mostrar, en Componente Products',userSelectedCategory)


  const category = productData.filter((product) => {
    if(userSelectedCategory.includes('All')){
      return product
    }
    if(product.category === userSelectedCategory){
      return product
    }

  })


  const showProduct = category.map((product)=>(

    <article key={product.id} id={product.id} className="cursor-pointer w-[380px] shadow-lg bg-white m-3 hover:drop-shadow-lg">
    {/* h-1/3 */}
    <Link to={`/products/${product.id}/`}>
    <div onClick={()=>pagProduct(product.id, product.image, product.title, product.description, product.price, product.category)}>
      <div className='pic h-60 p-1'>
        <img className="w-full h-full  object-contain" src={product.image} alt={product.title} />
      </div>
      <div className="flex items-center justify-between flex-col">
        <h2 className="py-2 font-bold uppercase	text-lg text-center text-button tracking-widest w-full">{product.title}</h2>
        {/* <p className="text-sm text-center text-text">{product.description}</p> */}
      </div>
      <div className="p-2 flex justify-center items-center">
      <span className="text-2xl py-2 font-semibold text-button2 leading-5">{product.price}$</span>      
      </div>
    </div>
    </Link>
    <button onClick={(e)=>productsSelecting(product.id,product.image,product.title,product.price)} className="w-full duration-200 text-sm bg-button2 text-white font-bold py-2 px-4 hover:bg-button2 z-50 hover:bg-text">
        ADD TO CART
    </button>
  </article>
  )).slice(firstIndex, lastIndex)

    return (
    <>

      {productData.length == 0 ? <ServerError error={someErr}></ServerError> : showProduct}
    </>
    )
}


export default Products