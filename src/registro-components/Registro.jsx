
// hooks
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import { addUser } from "../store/features/register";


// redux
import { useSelector, useDispatch } from "react-redux";



// component
import InputRegistro from "./InputRegistro"


// provider



import React from "react";

// Verificar uso del los useHooks - check


function Registro({setUserLog, setActualUser,activeComponents,setActiveComponents}){
    // si paso un estado como prop al hijo, y cambio el valor del estado, el componente hijo
    // va a renderizarse inecesariamente
    // Se renderiza cuando se llama
    console.log('COMPONENTE REGISTRO')

    const [haveErr, setHaveErr] = useState(false)
    const [error, setError] = useState([]);
    const [isValid, setIsValid] = useState(true)

    const dispatch = useDispatch()
    const dataUsers = useSelector((state) => state.registerUser.users)
    // console.log('usuarios en el redux', dataUsers)

    // el componete siempre necesita un estado inicial:
    // mover la logica de comparacion a otro componente
    const [dataUser, setDataUser] = useState(
        {
        name: "",
        surname: '',
        email: '',
        password: '',
        password_repeat: '',
        }
    )

    const nameLength=(name)=>(
        name.length > 3 
    )

    const verifyEmail=(email)=>{
    return /\S+@\S+\.\S+/.test(email);
    }

    const verifyPasswords = (pass)=>{
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass);
    }

    const verifyPassMatch = (pass)=>{
        const repeatPassword = dataUser.password_repeat
        return pass === repeatPassword
    }

    function validate(){
        const errors = []

        const name = dataUser.name
        const email = dataUser.email
        const password = dataUser.password

        
        // Al menos un dígito.
        // Al menos una letra minúscula.
        // Al menos una letra mayúscula.
        // Al menos 8 caracteres en total.
        
    
        if(!nameLength(name)){
            errors.push({name: 'Nombre de usuario muy corto'})
        }
    
        if(!verifyEmail(email)){
            errors.push({email: 'Correo Invalido'})
    
        }
        if(!verifyPasswords(password)){                  
            errors.push({password: `La contraseña no coincide`})
    
        }
        if(!verifyPassMatch(password)){
            errors.push({password_repeat: 'Las Contraseñas no coinciden'})
        }
        if(dataUsers.length !== 0){
            console.log('Verifica si el elemento, no esta vacio', dataUser)
            console.log('No estoy Vacio')
            console.log(dataUser.email, email)

            const findDuplicated = dataUsers.find((user)=> user.email === email);
            console.log(findDuplicated)

            if(findDuplicated){
                errors.push({email: 'Correo en uso'})

                return
            }
        }else{
            console.log('Estoy Bien vacio')
        }


        if(errors.length > 0){
            setIsValid(false)
            setError(errors)
            setHaveErr(true)

            return
        }

            setIsValid(true)
            setError([])
            return true

        
    }

    function handleSubmit(evt){
    // previene el renderizado del form
    console.log(dataUser)
    evt.preventDefault()    
    if(validate()){
        console.log('Bienvenue, Welcolme, wilkommen', dataUser)
        // guardar los datos en un arr, por ahora, pero luego
        // addUsers((prevItems) => [...prevItems,dataUser]);
        dispatch(addUser(dataUser))
        // aca iria el state de redux

        setActualUser(dataUser)
        setUserLog(true)
        setDataUser(
            {
                name: "",
                surname: '',
                email: '',
                password: '',
                password_repeat: '',
            }
        )



    }else{
        console.log('Error??')
    }
    

    }

    function handleChange(evt){
            const { target } = evt;
            const { name, value } = target;
            const newValues = {
                ...dataUser,
                [name]: value
            };
            setDataUser(newValues);        
    }
    
    
    useEffect(()=>{setActiveComponents(false)}, [])

    console.log('Que mierda es el estado error',error) 
    return (

        <section className="bg-body flex justify-center items-center flex-col relative">
        

        <div className="center flex justify-center items-center w-full flex-col sm:flex-row">
            <div className="sm:w-4/5 h-[320px] sm:h-[720px] flex justify-center items-center overflow-hidden">
                <img
                    className="rounded-lg sm:rounded-none shadow-lg sm:shadow-none sm:object-cover h-full w-full"
                    // src="./images/bg-signin.jpg"
                    src="https://img.freepik.com/foto-gratis/composicion-vista-frontal-cyber-monday_23-2149055978.jpg?t=st=1727474471~exp=1727478071~hmac=09898073361987f45e1a6a40b8ef82099ed1a4641a5b956d3ba47c60fdb542c2&w=740"
                    alt="Compras"
                    loading="lazy"
                />
            </div>

            <form onSubmit={handleSubmit} className="bg-[#f2f2f2] w-full sm:w-1/2 h-[620px] p-5">

                <InputRegistro 
                id="name"
                name="name" 
                type="text" 
                text="Nombre"
                value={dataUser.name} 
                onChange={handleChange}
                setHaveErrs={setHaveErr}
                haveErrs={haveErr}
                err={error}>
                
                </InputRegistro> 

                <InputRegistro 
                id="surname" 
                name="surname" 
                type="text"
                text="Apellido"
                value={dataUser.surname} 
                onChange={handleChange}
                setHaveErrs={setHaveErr}
                haveErrs={haveErr}
                err={error}>                    
                </InputRegistro>

                <InputRegistro 
                id="email" 
                name="email" 
                type="email"
                text="Correo"
                value={dataUser.email} 
                onChange={handleChange}
                setHaveErrs={setHaveErr}
                haveErrs={haveErr}
                err={error}>          
                </InputRegistro>

                <InputRegistro 
                id="password"
                name="password"
                type="password" 
                text="Contraseña"
                value={dataUser.password} 
                onChange={handleChange}
                setHaveErrs={setHaveErr}
                haveErrs={haveErr}
                err={error}
                textPassword='La contaseña debe tener: Al menos un dígito.
                            Al menos una letra minúscula.
                            Al menos una letra mayúscula.
                            Al menos 8 caracteres en total'>           
                </InputRegistro>

                <InputRegistro 
                id="password_repeat"
                name="password_repeat" 
                type="password"
                text="Repetir Contraseña"
                value={dataUser.password_repeat} 
                onChange={handleChange}
                setHaveErrs={setHaveErr}
                haveErrs={haveErr}
                err={error}>
                </InputRegistro>

                
                <div className="btns flex justify-center items-center flex-col">
                    <span className="font-bold text-center pointer">
                        <Link to="/signin">Ya tengo una cuenta</Link>
                    </span>
                    <button 
                        type="submit"
                        className="mt-3 rounded-lg text-[#f2f2f2] font-semibold  bg-button py-2 px-3 w-1/2 ease-out duration-700 hover:bg-button2  shadow-md hover:shadow-lg transition-shadow ...">
                            Registrarse
                    </button>
                </div>
            </form>
        </div>
       

        </section>
    
    )

}
export default Registro