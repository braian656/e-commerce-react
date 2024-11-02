import { useContext, useEffect, useRef } from 'react';
import ProductCard from '../card-product-component/Card';
import SectionEmpty from './SectionEmpty';
import { contextProducts } from '../context/context';
import ButtonPag from '../buttons-component/ButtonPag';
import EmptyCart from '../errors-component/EmpyCart';
function ProductsList({setSliderActive,items}){
    console.log('Lista de deseo en productsList',items)

    const mapWishList = items.map((item)=>(
        <ProductCard
            key={item.id}
            id={item.id}  
            image={item.image}
            product={item.product} 
            description={item.description}
            price={item.price}
        ></ProductCard>
    ))
// cuando se guarde aca , se debe mostrar siempre
    const processPurchase = (e)=>{
        // 1) verificar que tenga cuenta
        // 2) si la tiene mostara un modal o algo asi
        console.log('Comprar mierdas 2.0')
    }


    useEffect(()=>{
        setSliderActive(false)

    }, [])
    return(

        <section id="wishList" 
        className="p-2 flex justify-center items-center flex-col flex-wrap min-h-screen">
            {/* {mapWishList} */}

            <h1 className='font-bold text-4xl m-2 text-ends text-red-500'>Tu Lista de Deseos</h1>
            <div className="content-whisList flex justify-center items-center flex-wrap">
             {
                items.length !== 0 
                ? 
                mapWishList
                :  
                <EmptyCart text="Aun no hay nada por aqui...">
                </EmptyCart> 
            }
            </div>
            <div className='button-buy'>
                {
                    items.length !== 0
                    ? 
                    <ButtonPag 
                    text="REALIZAR COMPRA"
                    clr="bg-button"
                    clrText="white"
                    width="w-auto"
                    onClick={processPurchase}></ButtonPag>
                    :
                    null
                }
            </div>
        </section>

    )
}

export default ProductsList