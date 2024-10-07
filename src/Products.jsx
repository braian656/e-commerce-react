function Products({id,image,product,description,price, onClick,onClickPag}){



    return (
        <article id={id} className="cursor-pointer w-[380px] shadow-lg bg-white m-3 hover:drop-shadow-lg">
          {/* h-1/3 */}
          <div onClick={()=>onClickPag(id, image, product, description, price)}>
            <div className='pic h-60'>
              <img className="w-full h-full  object-contain" src={image} alt={product} />
            </div>
            <div className="flex items-center justify-between flex-col">
              <h2 className="py-2 font-bold uppercase	text-lg text-center text-button tracking-widest w-full">{product}</h2>
              <p className="text-sm text-center text-text">{description}</p>
            </div>
            <div className="p-2 flex justify-center items-center">
            <span className="text-2xl py-2 font-semibold text-button2 leading-5">{price}$</span>      
            </div>
          </div>
          <button onClick={(e)=>onClick(id,image,product,price)} className="w-full duration-200 text-sm bg-button2 text-white font-bold py-2 px-4 hover:bg-button2 z-50 hover:bg-text">
              ADD TO CART
          </button>
        </article>
    )
}


export default Products