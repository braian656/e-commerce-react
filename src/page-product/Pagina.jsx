import { useContext, useEffect, useReducer, useState } from "react"
import Error from "../errors-component/Error"
import ChoseColor from "./ChoseColor"
import Cantidad from "./Cantidad"
import ButtonPag from "../buttons-component/ButtonPag"
import { contextProducts } from "../context/context"
import { useNavigate } from "react-router-dom"

import SignIn from "../registro-components/SignIn"

function Pagina({actualUser,onClick, setSliderActive}){

    const navigate = useNavigate()
    const {actualProduct, setActualProduct, productData, setOpenPagProduct,openPagProduct,setPurchasedProducts, purchasedProducts} = useContext(contextProducts)
    const [noUser, setNoUser] = useState(true) /*Verifico si el user tiene cuenta o no*/
    const [preferenceUser, setPreferenceUser] = useState([]) /*Guarda las preferencias,color, cantidad, producto*/
    const [showMesaggeErr, setShowMessageErr] = useState(false) /*Muestra el modal msj si es true*/
    const [message, setMessage] = useState('')  /*Mensaje a mostrar en el modal*/
    const [txtButton , setTxtButton] = useState('')
    const [imgError, setImgError] = useState('') /*titulo del boton en el modal*/
    const [titleModal, setTitleModal] = useState('')
    const [ item, setItems ] = useState([])
    const [wishListModal, setWishListModal] = useState(false)
    const [quantity, setQuantity] = useState(1) /*Cantidad de producto a ordenar, por defecto siempre 1*/


    console.log(actualProduct.rating)
    const handlePreference = (e) => {
        const name = e.target.name;
        const value = e.target.dataset.clr;



        const preference = {
            producto: actualProduct.product, // asegúrate de que actualProduct.product tenga un valor válido
            color: value, // aseguramos que e.target.dataset.clr sea válido
            cantidad: quantity, // aseguramos que quantity tenga un valor válido
        };
        console.log(preference)
        setPreferenceUser(prevState => ([ ...prevState, preference ]));

        // Creamos la nueva preferencia
    
        
        // Guardamos la nueva preferencia en el array de preferencias del usuario
    
        return;
    };
    
  

    const handleData = () => {
    
            // Si el usuario no ha iniciado sesión
            if (actualUser === null) {
                setNoUser(false);
                setMessage('Inicia sesion para realizar la compra.');
                setTxtButton('IR A MI CUENTA');
                setShowMessageErr(true);
                setImgError('/images/sad-circle-svgrepo-com.svg')
                setTitleModal('Accede para Continuar')
    
                return;
            }
            // Si el usuario ha ingresado, verificar que las preferencias no estén vacías
            if (preferenceUser.length !== 0) {
                let allFieldsFilled = true;
        
                // Iterar sobre el array de preferencias y verificar que los valores no sean indefinidos o vacíos
                for (const preference of preferenceUser) {
                    if (
                        !preference.producto || 
                        !preference.color || 
                        preference.cantidad <= 0 || 
                        preference.cantidad === undefined
                    ) {
                        allFieldsFilled = false;
                        break;
                    }
                }
        
                if (allFieldsFilled) {
                    // Si todos los campos son válidos
                    setPurchasedProducts(prevProducts => [...prevProducts, ...preferenceUser]);
                    // esto evita un anidado de arr
                    setMessage(actualProduct.product);
                    setTxtButton('Aceptar');
                    setShowMessageErr(true);
                    setImgError('/images/check-square-svgrepo-com.svg')
                    setTitleModal('¡Compra realizada con éxito!')
    
                    console.log(preferenceUser)
    
                    return
                } else {
                    // Si algún campo es inválido
                    setMessage('Rellene los campos necesarios para realizar su compra');
                    setTxtButton('CERRAR');
                    setShowMessageErr(true);
                    setImgError('/images/ghost-svgrepo-com.svg')
                    setTitleModal('Informacion requerida')
    
                }
            } else {
                // Si no hay ninguna preferencia
                setMessage('Rellene los campos necesarios para realizar su compra');
                setTxtButton('CERRAR');
                setShowMessageErr(true);
                setImgError('/images/ghost-svgrepo-com.svg')
                setTitleModal('Informacion requerida')
    
    
            }
    
    
    
    
    
    
    };

   
    const [num, setNum] = useState();
    const showStars = Array.from({ length: num }, (_, i) => (
    <span key={i} className="text-button2 m-0.5 hover:text-buttonHover">
        <i className="fa-regular fa-star"></i>
    </span>
    ));

    useEffect(()=>{


    productData.forEach(item => {
            if(item.id === actualProduct.index){
                setNum(item.stars)
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
    
        onClick(actualProduct.index,
            actualProduct.image,
            actualProduct.product,
            actualProduct.descr,
            actualProduct.total)

        setWishListModal(true)
    }
    const handleModalWishList = ()=>{

        setWishListModal(false)

    }


    
    console.log(quantity)
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
        image="/images/hearts-svgrepo-com.svg"
        title="Producto agregado"
        >
        </Error>
        
        <div id={actualProduct.index} className="product-pag bg-button mb-12 mt-16 sm:flex sm:justify-center sm:items-center">

            <div className="product_image bg-white h-80 rounded-none sm:h-[500px] sm:w-[40%] sm:min-w-[220px] sm:rounded-md">
                <img 
                src={actualProduct.image}
                alt={actualProduct.product}
                className="w-full h-full sm:h-auto object-contain object-center sm:h-full sm:w-auto" />
            </div>

            <div className="producto_detail p-5 sm:w-[56%] flex justify-center items-center">
                <div className="detail w-full">
                    <span className="category text-button2 font-semibold text-xs">{actualProduct.productCategory}ss</span>
                    <h1 className="name text-white text-xl font-semibold sm:my-3">{actualProduct.product}</h1>

                    <div className="price flex justify-between items-center">
                        <h2 className="text-button2 text-2xl">${actualProduct.total}</h2>

                        <div className="review_star text-button2 text-2xl">
                            {actualProduct.rating}
                            <i className="fa-regular fa-star ml-2"></i>
                        </div>
                    </div>

                    <div className="descrption justify-center items-center flex-col sm:my-5">
                        <h2 className="descr text-xs text-white font-semibold my-1.5">DESCRIPCION</h2>
                        <p className="text-text sm:my-2">
                            {actualProduct.descr}
                        </p>
                    </div>

                    <div className="preference flex items-center sm:my-5">

                        <div className="preference_box mx-4">

                            <h3 className="quantity text-white my-1.5 text-center">Cantidad</h3>
                            <Cantidad 
                                count={quantity} 
                                setCount={setQuantity}>
                            </Cantidad>
                        </div>        
                        <div className="preference_box mx-4">

                            {/* <h3 className="quantity text-white my-1.5 text-center">Color</h3> */}
                            <ChoseColor
                            onClick={handlePreference} 
                            clr1="bg-red-500" 
                            clr2="bg-blue-500" 
                            clr3="bg-green-500"
                            ></ChoseColor>
                        </div> 


                        <div className="preference_box">
                            <h3 className="total text-white my-1.5 mx-4 text-center">Total</h3>
                            <div className="w-20 p-1 flex justify-center items-center border-2 border-solid border-text rounded-lg">
                                <span className="total text-text">${parseInt(actualProduct.total * quantity)}</span>
                            </div>
                        </div>        
                    </div>
                    <ButtonPag 
                        text="Agregar a la lista de deseo" 
                        onClick={addToWishList} 
                        clr="bg-button"
                        clrText="white"
                        width="w-full"
                        border="border-2 border-solid border-white"
                        hoverButton="hover:border-button2 hover:text-button2">
                        
                    </ButtonPag>
                    <ButtonPag 
                        text="COMPRAR" 
                        onClick={handleData} 
                        clr="bg-button2"
                        clrText="button"
                        width="w-full"
                        hoverButton="hover:bg-white">                  
                    </ButtonPag>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Pagina