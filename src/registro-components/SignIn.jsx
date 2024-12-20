import { useContext, useEffect, useState } from "react"
import InputRegistro from "./InputRegistro"
import { contextProducts } from "../context/context"
import { useDispatch , useSelector} from "react-redux"
import ButtonPag from "../buttons-component/ButtonPag"

import { useNavigate } from "react-router-dom"


function SignIn({setOpenPagProduct,setSliderActive,sliderActive}){

    console.log('Por que mierda no funcionas hijo de puta')
    const dataUsers = useSelector((state) => state.registerUser.users)

    const [verifyAccount,setVerifyAccount] = useState(
        { 
            email : '',
            password : '',
        }
    ) 
    const navigate = useNavigate()
    

    const submitForm = (e)=>{
        e.preventDefault()

    
        for(const [key, value] of Object.entries(dataUsers)){

            if(value.email === verifyAccount.email && 
                value.password === verifyAccount.password){
                    
                console.log('EL correo es correcto,La contraseña es Correcta')

            }else{
                return
            }
        }

        console.log(verifyAccount)

    }

    const signUp = ()=>{
        navigate('')
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
        
        // setOpenPagProduct(false)
        // setSliderActive(false)
    })

    return(
        <section className="sign-in flex justify-center items-center relative w-full h-[600px]">
            <form onSubmit={submitForm} className="form-signIn shadow-lg">
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

                    <span 
                    className="text-signIn"
                    onClick={signUp}>
                        Aun no tienes una cuenta?
                    </span>
                    <ButtonPag 
                        text="Ingresar" 
                        type="submit"
                        clr="bg-zinc-900"
                        clrText="white"
                        width="w-full"
                        border="border border-solid border-white"
                        hoverButton="hover:text-zinc-900 hover:bg-white border-zinc-900">         
                    </ButtonPag>
                </div>
                </form>
        </section>
    )

}

export default SignIn