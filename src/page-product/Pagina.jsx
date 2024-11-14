import { act, useContext, useEffect, useReducer, useState } from "react"
import Error from "../errors-component/Error"
import ChoseColor from "./ChoseColor"
import Cantidad from "./Cantidad"
import ButtonPag from "../buttons-component/ButtonPag"
import { contextProducts } from "../context/context"
import { useNavigate } from "react-router-dom"

import SignIn from "../registro-components/SignIn"

function Pagina({actualUser,onClick, setSliderActive}){

    const navigate = useNavigate()

    const {actualProduct,
            setActualProduct,
            productData, 
            setOpenPagProduct,
            openPagProduct,
            setPurchasedProducts,
            purchasedProducts} = useContext(contextProducts)

    
    const [noUser, setNoUser] = useState(true) /*Verifico si el user tiene cuenta o no*/
    const [showMesaggeErr, setShowMessageErr] = useState(false) /*Muestra el modal msj si es true*/
    const [message, setMessage] = useState('')  /*Mensaje a mostrar en el modal*/
    const [txtButton , setTxtButton] = useState('')
    const [imgError, setImgError] = useState('') /*titulo del boton en el modal*/
    const [titleModal, setTitleModal] = useState('')
    const [wishListModal, setWishListModal] = useState(false)

    const [quantity, setQuantity] = useState(1) /*Cantidad de producto a ordenar, por defecto siempre 1*/
    const [color,setColor] = useState('')

    const handlePreference = (e) => {
            e.preventDefault()
            setColor(e.target.dataset.clr)
    };
    
    const increment = ()=>{
        setQuantity(quantity + 1)            
    }

    const decrement = ()=>{
        setQuantity(quantity > 0 ? quantity-1 : 0)
    }
    console.log(actualProduct)

    const handleData = () => {
    
            // Si el usuario no ha iniciado sesión
            if (actualUser === null) {
                setNoUser(false);
                setMessage('Inicia sesion para realizar la compra.');
                setTxtButton('IR A MI CUENTA');
                setShowMessageErr(true);
                setImgError('/images/sad-circle.svg')
                setTitleModal('Accede para Continuar')
    
                return;
            }
            if (quantity !== 0 && color !== '') {
                let allFieldsFilled = true;
            
                if (allFieldsFilled) {

                    const preference = {

                        producto: actualProduct.product, 
                        price : actualProduct.total ,
                        color: color, 
                        cantidad: quantity,
        
                    };

                    
                    // Si todos los campos son válidos
                    setPurchasedProducts(prevProducts => [...prevProducts, preference]);
                    // esto evita un anidado de arr
                    setMessage(actualProduct.product);
                    setTxtButton('Aceptar');
                    setShowMessageErr(true);
                    setImgError('/images/check.svg')
                    setTitleModal('¡Compra realizada con éxito!')
        
                    return
                } else {
                    // Si algún campo es inválido
                    setMessage('Rellene los campos necesarios para realizar su compra');
                    setTxtButton('CERRAR');
                    setShowMessageErr(true);
                    setImgError('/images/ghost.svg')
                    setTitleModal('Informacion requerida')
    
                }
            } else {
                // Si no hay ninguna preferencia
                setMessage('Rellene los campos necesarios para realizar su compra');
                setTxtButton('CERRAR');
                setShowMessageErr(true);
                setImgError('/images/ghost.svg')
                setTitleModal('Informacion requerida')
    
    
            }
    
    
    
    
    
    
    };

   
    const [num, setNum] = useState();
    const showStars = Array.from({ length: num }, (_, i) => (


    <span key={i} className="text-button m-0.5">
        <i className="fa-regular fa-star"></i>
    </span>

    
    ));


    useEffect(()=>{


    productData.forEach(item => {
            if(item.id === actualProduct.index){
                setNum(Math.round(item.rating.rate))
            }
    });


    },[actualProduct.index, productData])
    

    useEffect(()=>{
        setSliderActive(false)
    }, [])


    const handleModal = ()=>{
        setShowMessageErr(false)
        setImgError('')

    }

    const addToWishList = ()=>{
        if (quantity !== 0 && color !== ''){
            onClick(actualProduct.index,
                actualProduct.image,
                actualProduct.product,
                actualProduct.descr,
                actualProduct.total,
                quantity, 
                color)
    
            setWishListModal(true)
        }
    
        
    }
    const handleModalWishList = ()=>{

        setWishListModal(false)

    }

   
    
    return(

    <section 
    className={`${showMesaggeErr || wishListModal ? 'bg-opacity' : 'bg-body'} p-2  flex justify-center items-center flex-col`}>

        <Error 
        visible={showMesaggeErr} 
        handleModal={handleModal}
        messageModal={message}
        txtButton={txtButton}
        actualUser = {actualUser}
        colorBtn='bg-green-500'
        image={imgError}
        title={titleModal}
        >
        </Error>


        <Error 
        visible={wishListModal} 
        handleModal={handleModalWishList}
        messageModal="Producto Agregado a la lista de deseos"
        txtButton={txtButton}
        actualUser = {actualUser}
        colorBtn='bg-green-500'
        image="/images/hearts.svg"
        title="Producto agregado"
        >
        </Error>
        <div id={actualProduct.index} className="p-2 product-pag rounded-xl bg-button2 my-[2vh] sm:flex sm:justify-between  sm:items-center">
            <div className="product_image bg-white h-[70vh] sm:w-[44%] rounded-xl shadow-md  sm:min-w-[220px] flex justify-center items-center">
                <img 
                src={actualProduct.image}
                alt={actualProduct.product}
                className="w-full h-full sm:h-auto object-contain object-center sm:h-full sm:w-auto" />
            </div>

            <div className="producto_detail p-5 sm:w-[56%] flex justify-center items-center">
                <div className="detail w-full">
                    <span className="category text-button font-semibold text-xs">
                        {actualProduct.productCategory}
                    </span>
                    <h1 className="name text-white text-xl font-semibold sm:my-3">
                        {actualProduct.product}
                    </h1>

                    <div className="price flex justify-between items-center">
                        <h2 className="text-white text-2xl">
                            ${actualProduct.total}
                        </h2>

                        <div className="review_star text-button text-2xl">
                            {showStars}
                        </div>
                    </div>

                    <div className="descrption justify-center items-center flex-col sm:my-5">
                        <h2 className="descr text-xs text-white font-semibold my-1.5">
                            DESCRIPCION
                        </h2>
                        <p className="text-text sm:my-2">
                            {actualProduct.descr}
                        </p>
                    </div>

                    <div className="preference flex items-center sm:my-5">

                        <div className="preference_box mx-4">

                            <h3 className="quantity text-white my-1.5 text-center">
                                Cantidad
                            </h3>

                            <Cantidad 
                                onClickIncrement={increment}
                                onClickDecrement={decrement}
                                count={quantity} 
                                setCount={setQuantity}>
                            </Cantidad>
                        </div>        
                        <div className="preference_box mx-4">
                            <ChoseColor
                            onClick={handlePreference} 
                            clr1="bg-red-500" 
                            clr2="bg-blue-500" 
                            clr3="bg-green-500"
                            ></ChoseColor>
                        </div> 


                        <div className="preference_box">
                            <h3 className="total text-white my-1.5 mx-4 text-center">
                                Total
                            </h3>
                            <div className="w-20 p-1 flex justify-center items-center border-2 border-solid border-text rounded-lg">
                                <span className="total text-text">
                                    ${parseInt(actualProduct.total * quantity)}
                                </span>
                            </div>
                        </div>        
                    </div>
                    <ButtonPag 
                        text="Agregar a la lista de deseo" 
                        onClick={addToWishList} 
                        clr="bg-zinc-900"
                        clrText="white"
                        width="w-full"
                        border="border border-solid border-white"
                        hoverButton="hover:text-zinc-900 hover:bg-white">
                        
                    </ButtonPag>
                    <ButtonPag 
                        text="COMPRAR" 
                        onClick={handleData} 
                        clr="bg-button"
                        clrText="white"
                        width="w-full"
                        hoverButton="hover:border-button2 hover:text-button2">                  
                    </ButtonPag>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Pagina