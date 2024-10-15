import { useContext, useEffect, useState } from "react"
import InputRegistro from "./InputRegistro"
import { contextProducts } from "../context/context"



function SignIn({setSliderActive,sliderActive,users}){
    const [productData] = useContext(contextProducts)


    const [verifyAccount,setVerifyAccount] = useState({ email : '', password : '',}) 

    console.log(productData)
    

    const submitForm = (e)=>{
        e.preventDefault()

    
        for(const [key, value] of Object.entries(users)){
            if(value.email === verifyAccount.email){
                console.log('EL correo es correcto')

                if(value.password === verifyAccount.password){
                    console.log('La contraseña es Correcta')
                    // El usuario debe entrar y poder ver su cuenta compras y toda esa verga
                    // si la contraseña y el correo es correcto,mostrar en el navbar el nombre y una 'Foto'
                }

            }else{
                return
            }
        }

        console.log(verifyAccount)

    }

    const changeForm = (e)=>{
        
        console.log(e.target.name)

        const { target } = e;
        const { name, value } = target;
        const newValues = {
            ...verifyAccount,
            [name]: value
        };

        setVerifyAccount(newValues)
    }
    useEffect(()=>{

        if(sliderActive == true){
            setSliderActive(false)
        }
        // setSliderActive(false)
    })

    return(
        <section className="sig-in bg-hero-sigIn bg-cover bg-no-repeat bg-center flex justify-center items-center relative  w-full h-[600px]">
            <form onSubmit={submitForm} className="w-full bg-button2 p-5 sm:w-3/5">
                    <h1 className="text-center font-bold text-3xl text-button">Ingresar</h1>

                        <InputRegistro 
                        id="email" 
                        name="email" 
                        type="email"
                        text="Correo"
                        onChange={changeForm}>          
                        </InputRegistro>

                        <InputRegistro 
                        id="password"
                        name="password"
                        type="password" 
                        text="Contraseña"
                        onChange={changeForm}>           
                        </InputRegistro>
                <div className="btns flex justify-center items-center flex-col">
                <button 
                type="submit"
                className="mt-3 text-button2 font-bold  bg-button p-3 w-1/2 ease-out duration-700 hover:bg-white hover:text-button">
                    Ingresar
                </button>
                </div>
                </form>
        </section>
    )

}

export default SignIn