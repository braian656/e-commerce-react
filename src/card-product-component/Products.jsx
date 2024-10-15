import { useContext } from "react"
import { contextProducts } from "../context/context"
import { Link } from "react-router-dom"

function Products(){


  const {productData,pagProduct, productsSelecting, productCart} = useContext(contextProducts)
  // el onClickPag, usa un estado actualProduct, para guardar la info de los product
  // y luego mostrarlos, en un tercer nivel <Pagina>
  // <Link to={`/products/${product.id}`}>{product.name}</Link>

  const showProduct = productData.map((product)=>(

    <article key={product.id} id={product.id} className="cursor-pointer w-[380px] shadow-lg bg-white m-3 hover:drop-shadow-lg">
    {/* h-1/3 */}
    <Link to={`/products/${product.id}/`}>
    <div onClick={()=>pagProduct(product.id, product.img, product.producto, product.descripcion, product.precio)}>
      <div className='pic h-60'>
        <img className="w-full h-full  object-contain" src={product.img} alt={product.producto} />
      </div>
      <div className="flex items-center justify-between flex-col">
        <h2 className="py-2 font-bold uppercase	text-lg text-center text-button tracking-widest w-full">{product.producto}</h2>
        <p className="text-sm text-center text-text">{product.descripcion}</p>
      </div>
      <div className="p-2 flex justify-center items-center">
      <span className="text-2xl py-2 font-semibold text-button2 leading-5">{product.precio}$</span>      
      </div>
    </div>
    </Link>
    <button onClick={(e)=>productsSelecting(product.id,product.img,product.producto,product.precio)} className="w-full duration-200 text-sm bg-button2 text-white font-bold py-2 px-4 hover:bg-button2 z-50 hover:bg-text">
        ADD TO CART
    </button>
  </article>
  ))

    return (
    <>
      {showProduct}
    </>
    )
}


export default Products