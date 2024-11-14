import { useContext, useState } from "react"
import InputRegistro from "./InputRegistro"
import PicPerfil from "./PicPerfil"
import { contextProducts } from "../context/context"
import ButtonPag from "../buttons-component/ButtonPag"
import Error from "../errors-component/Error"


import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/features/register"

function InfoUser({actualUser, setActualUser}){
    const {picUser} = useContext(contextProducts)
    const dispatch = useDispatch()


    const [actualValue , setActualValue] = useState(
        {
            name: actualUser.name,
            surname: actualUser.surname,
            email: actualUser.email,
            password: actualUser.password,
            password_repeat: actualUser.password_repeat,
        }
    )
    const [newValues, setNewValues] = useState()

    const [updateUserData, setUpdateUserData] = useState(false)
    const [modalVisible , setModalVisible] = useState(false)
    const [message, setMessage] = useState('')
    
    const nameLength=(name)=>(
        name.length > 3 
    )

    const verifyPasswords = (pass)=>{
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass);
    }

    const verifyPassMatch = (pass)=> pass === actualValue.password_repeat

    

    const validate = ()=>{
        const errors = []
        

        const name = actualValue.name
        const password = actualValue.password

        if(!nameLength(name)){
            errors.push('Nombre de usuario muy corto')
        }
        if(!verifyPasswords(password)){    
            errors.push('Las Contraseñas no coinciden')
        }
        if(!verifyPassMatch(password)){
            errors.push('Las Contraseñas no coinciden')
        }
    
        
        if(errors.length > 0){
            setMessage(errors)

            return
        }

    
            setMessage([])
            return true

    }

    const handleSubmit = (e)=>{
        e.preventDefault()


        if(validate()){
            dispatch(addUser(actualValue))
            setActualUser(actualValue)
        }
        // else{

        //     return

        // }


    }
    
    function handleChange(evt){
        

        console.log(evt)
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
            ...actualValue,
            [name]: value
        };
        setActualValue(newValues);         
    }
    const handleClassModal = ()=>{
        setModalVisible(false)
    }
    return(
    <>


        <div className="section-info">

            <Error 
            visible={modalVisible} 
            messageModal="DESEA REALIZAR CAMBIOS??"
            txtButton="ACEPTAR"
            colorBtn="bg-red-500"
            image="./images/danger.svg"
            title="Realizar cambios"
            handleModal={handleClassModal}
            ></Error>
        
            <PicPerfil 
            picUser={picUser}>
            </PicPerfil>


           <div className="inputs-user">

                <InputRegistro 
                id="nombre" 
                name="name" 
                type="text"
                value={actualValue.name}
                onChange={handleChange}
                text="Nombre">
                </InputRegistro>


                <InputRegistro 
                id="apellido" 
                name="surname" 
                type="text"
                value={actualValue.surname}
                onChange={handleChange}
                text="Apellido">
                </InputRegistro>

           </div>
           
           <div className="inputs-user">
                <InputRegistro 
                id="contraseña" 
                name="password" 
                type="text"
                value={actualValue.password}
                onChange={handleChange}
                text="Contraseña">
                </InputRegistro>

                <InputRegistro 
                id="contraseña" 
                name="password" 
                type="text"
                value={actualValue.password_repeat}
                onChange={handleChange}
                text="Repetir Contraseña">
                </InputRegistro>
            </div>
            <div className="w-full flex justify-center items-center">
                <button 
                onClick={handleSubmit}
                className="button-infoUser">
                    Realizar Cambios
                </button>
            </div>
    
        </div>

    </>
        
    )
}

export default InfoUser