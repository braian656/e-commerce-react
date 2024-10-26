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
    const [txtButton , setTxtButton] = useState('') /*titulo del boton en el modal*/

    const [ item, setItems ] = useState([])

    const [quantity, setQuantity] = useState(1) /*Cantidad de producto a ordenar, por defecto siempre 1*/
   
    const handlePreference = (e) => {
        const name = e.target.name;
        const value = e.target.dataset.clr;
    
        // Creamos la nueva preferencia
        const preference = {
            producto: actualProduct.product, // asegúrate de que actualProduct.product tenga un valor válido
            color: value, // aseguramos que e.target.dataset.clr sea válido
            cantidad: quantity, // aseguramos que quantity tenga un valor válido
        };
    
        // Guardamos la nueva preferencia en el array de preferencias del usuario
        setPreferenceUser(prevState => ([ ...prevState, preference ]));
    
        return;
    };
    
    const handleData = () => {
        console.log('Preferencias del usuario:', preferenceUser);
    
        // Si el usuario no ha iniciado sesión
        if (actualUser === null) {
            setNoUser(false);
            setMessage('Debe ingresar para realizar la compra.');
            setTxtButton('IR A MI CUENTA');
            setShowMessageErr(true);

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
                setMessage('¡Compra realizada con éxito!');
                setShowMessageErr(true);
                setTxtButton('Aceptar');
            } else {
                // Si algún campo es inválido
                console.log('Algún campo no se ha rellenado correctamente');
                setMessage('Rellene los campos necesarios para realizar su compra');
                setTxtButton('CERRAR');
                setShowMessageErr(true);
            }
        } else {
            // Si no hay ninguna preferencia
            console.log('No se han rellenado las preferencias del usuario');
            setMessage('Rellene los campos necesarios para realizar su compra');
            setTxtButton('CERRAR');
            setShowMessageErr(true);
        }
    };
    

    const [num, setNum] = useState();
    const showStars = Array.from({ length: num }, (_, i) => (
    <span key={i} className="text-button2 m-0.5 hover:text-buttonHover">
        <i className="fa-regular fa-star"></i>
    </span>
    ));

    // console.log(actualProduct)
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

    return(

    <section className={`p-2 bg-body flex justify-center items-center flex-col`}>
        <Error 
        visible={showMesaggeErr} 
        setVisible={setShowMessageErr} 
        messageModal={message}
        txtButton={txtButton}
        actualUser = {actualUser}
        colorBtn='bg-green-500'
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

                        <div className="review_star">
                            {showStars}
                        </div>
                    </div>

                    <div className="descrption justify-center items-center flex-col sm:my-5">
                        <h2 className="descr text-xs text-white font-semibold my-1.5">DESCRIPCION</h2>
                        <p className="text-text sm:my-2">
                            {actualProduct.descr}
                        </p>
                    </div>

                    <div className="preference flex items-center sm:my-5">

                        <ChoseColor
                        onClick={handlePreference} 
                        clr1="bg-red-500" clr2="bg-blue-500" clr3="bg-green-500"
                        ></ChoseColor>
        
                        <div className="preference_box mx-4">
                            <h3 className="quantity text-white my-1.5 text-center">Cantidad</h3>
                            <Cantidad count={quantity} setCount={setQuantity}></Cantidad>
                        </div> 


                        <div className="preference_box">
                            <h3 className="total text-white my-1.5 mx-4 text-center">Total</h3>
                            <div className="w-20 p-1 flex justify-center items-center border-2 border-solid border-text rounded-lg">
                                <span className="total text-text">${parseInt(actualProduct.total * quantity)}</span>
                            </div>
                        </div>        
                    </div>
                    <button 
                    onClick={(e)=> { onClick(actualProduct.index, actualProduct.image, actualProduct.product, actualProduct.descr, actualProduct.total);}}
                    className="add_to_list mt-2.5 text-white font-bold rounded-md p-4 border-2 border-solid border-white ease-out duration-700 hover:border-button2 hover:text-button2">
                        Agregar a lista de deseo
                    </button>                  
                    <ButtonPag 
                        text="COMPRAR" 
                        onClick={handleData} 
                        clr="bg-button2">
                    </ButtonPag>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Pagina