import { useContext, useEffect, useState } from "react"
import { Routes, Route} from "react-router-dom"
import { Link } from 'react-router-dom';


import InputRegistro from "./InputRegistro"

import React from "react";

function Registro({setSliderActive,setUserLog,sliderState, slider, addUsers, users, setActualUser}){
    const [haveErr, setHaveErr] = useState(false)
    const [error, setError] = useState([]);
    const [isValid, setIsValid] = useState(true)
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

    useEffect(()=>{
        sliderState(!slider)
    }, [])
        

    function validate(){
        const errors = []

        const name = dataUser.name
        const surname = dataUser.surname
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

        if(users.length !== 0){
            console.log('No estoy Vacio')

            const findDuplicated = users.find((user)=> user.email === email);

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
    evt.preventDefault()

   
    
    if(validate()){
        console.log('Bienvenue, Welcolme, wilkommen', dataUser)
        // guardar los datos en un arr, por ahora, pero luego
        addUsers((prevItems) => [...prevItems,dataUser]); 

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
        console.log('Que puta mierda')
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
    
    useEffect(()=>{
        
        
        setSliderActive(false)
    }, [])

    return (

        <section className="bg-body flex justify-center items-center flex-col relative">
            
        <div className="center flex justify-center items-center w-full flex-col sm:flex-row">
            <div className="sm:w-4/5 sm:h-[600px] flex justify-center items-center overflow-hidden">
                
                <img
                    className="w-full h-full object-cover"
                    src="https://img.freepik.com/foto-gratis/composicion-vista-frontal-cyber-monday_23-2149055978.jpg?t=st=1727474471~exp=1727478071~hmac=09898073361987f45e1a6a40b8ef82099ed1a4641a5b956d3ba47c60fdb542c2&w=740"
                    alt="Compras"
                />
            </div>
            {/* <h1 className="absolute top-0 font-bold text-3xl text-button">Registro de usuario</h1> */}
            <form onSubmit={handleSubmit} className="bg-button2 w-full sm:w-1/2 h-[600px] p-5">
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
                className="mt-3 text-button2 font-bold  bg-button p-3 w-1/2 ease-out duration-700 hover:bg-white hover:text-button">
                    Registrarse
            </button>
            </div>
            </form>
        </div>
       

        </section>
    
    )

}
export default Registro