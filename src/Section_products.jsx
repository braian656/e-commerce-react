import {useState} from 'react'
import Pagina from './Pagina'


function sectionProducts({openPagProduct, showProduct, actualProduct, funcAdd, sliderState}){
    const [wishList, setWhishList] = useState([])

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
        setWhishList((prevWishList) => {
            const updatedWishList = [...prevWishList, whishProduct];
            
            funcAdd(updatedWishList);
            
            return updatedWishList;
        });
    }
    
    // sliderState(false)
    return (

    <section id="tech" 
        className='p-2 bg-body flex justify-center items-center flex-wrap'> 
        {
        openPagProduct ? 
        <Pagina
        id={actualProduct.index} 
        img={actualProduct.image}
        prod={actualProduct.product}
        descr={actualProduct.descr}
        pri={actualProduct.total}
        onClick={wishItems}
        sliderInactive = {sliderState}
        >
        
        </Pagina> 
        : showProduct
        }
    </section>

    )
}

export default sectionProducts