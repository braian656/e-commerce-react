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
    const {actualProduct, setActualProduct, productData, setOpenPagProduct,openPagProduct} = useContext(contextProducts)
    const [noUser, setNoUser] = useState(true)
    const [preferenceUser, setPreferenceUser] = useState({}) 
    const [showMesaggeErr, setShowMessageErr] = useState(false)
    const [message, setMessage] = useState('')
    const [txtButton , setTxtButton] = useState('')

    const [ item, setItems ] = useState([])

    const [quantity, setQuantity] = useState(1)

    const handlePreference =(e)=>{
        
        // falta poner el producto pelotudo
        const name = e.target.name
        const value = e.target.dataset.clr

        const preference = {
            producto : actualProduct.product,
            color: value,
            cantidad : quantity,
        }
        setPreferenceUser(prevState => ({ ...prevState, preference }));
    }

    const handdleData = ()=>{
        // problema cuando cliqueo en mas o menos, de el comp Cantidad,
        // aca no se refleja el cambio

        if(Object.keys(preferenceUser).length !== 0){
            
            for(const [key, value] of Object.entries(preferenceUser)){    

                if(value !== undefined || value !== '' && value > 0){
                    console.log(key, value)
                    setItems(prevList => [...prevList, preferenceUser]);
                }else{
                    console.log('seleccione todo de nuevo')
                    setShowMessageErr(true)
                }
            }
        }else{
            setMessage('Rellene los campos necesarios para realizar su compra')
            setTxtButton('CERRAR')
            setShowMessageErr(true)
        }
        // verificar si el usuario compro sin cuenta, y si lo hizo mandarlo a crearse una cuenta

        if(actualUser === null){
            setNoUser(false)
            setMessage('Debe ingresar para realizar la compra.')
            setTxtButton('IR A MI CUENTA')
            setShowMessageErr(true)
            // navigate("/SignIn")
        }else{
            setMessage('Compra realizada con exito!')
            setShowMessageErr(true)
            setTxtButton('Aceptar')

            return
        }
    }

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

    return(

    <section className={`p-2 bg-body flex justify-center items-center flex-col`}>
        {/* {noUser == false ? <SignIn setOpenPagProduct={setOpenPagProduct}></SignIn> : null} */}
        {/* DEsaparece por que lo estoy renderizando dentro del componente que quiero ocultar,salame */}

        <Error 
        visible={showMesaggeErr} 
        setVisible={setShowMessageErr} 
        messageModal={message}
        txtButton={txtButton}
        actualUser = {actualUser}
        colorBtn='bg-green-500'
        >
        </Error>
        
        <div id={actualProduct.index} className="product bg-button sm:flex sm:h-[80vh]">

            <div className="product_image bg-white h-full min-w-[420px]">
                <img 
                src={actualProduct.image}
                alt={actualProduct.product}
                className="w-full h-full object-contain object-center sm:h-full sm:w-auto" />
            </div>

            <div className="producto_detail p-5 sm:w-[50%]">
                <div className="detail w-full">
                    <span className="category text-button2 font-semibold text-xs">TECNOLOGIA</span>
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

                    <div className="preference flex  items-center sm:my-5">

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
                    className="add_to_list mt-2.5 text-white font-bold rounded-md p-4 w-full border-2 border-solid border-white ease-out duration-700 hover:border-button2 hover:text-button2">
                        Agregar a lista de deseo
                    </button>                  
                    {/* <button 
                    onClick={handdleData}
                    className="add mt-3 text-button font-bold rounded-md bg-button2 p-4 w-full ease-out duration-700 hover:bg-button2">
                        COMPRAR
                    </button> */}

                    <ButtonPag 
                    text="COMPRAR" 
                    onClick={handdleData} 
                    clr="bg-button2">
                    </ButtonPag>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Pagina