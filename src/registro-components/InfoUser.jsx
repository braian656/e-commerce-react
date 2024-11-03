import { useContext, useState } from "react"
import InputRegistro from "./InputRegistro"
import PicPerfil from "./PicPerfil"
import { contextProducts } from "../context/context"
import ButtonPag from "../buttons-component/ButtonPag"
import Error from "../errors-component/Error"
function InfoUser({actualUser,addUsers, setActualUser}){
    const {picUser} = useContext(contextProducts)
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
    console.log(actualUser)
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
        const surname = actualValue.surname
        const email = actualValue.email
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
            addUsers((prevItems) => [...prevItems,actualValue]); 
            setActualUser(actualValue)
            // setMessage('')
        }else{
            return
        }

       
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


        <div className="section-info p-5 rounded-md">

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


            <InputRegistro 
            id="nombre" 
            name="name" 
            type="text"
            value={actualValue.name}
            onChange={handleChange}
            text="NOMBRE DEL USUARIO">
            </InputRegistro>


            <InputRegistro 
            id="apellido" 
            name="surname" 
            type="text"
            value={actualValue.surname}
            onChange={handleChange}

            text="APELLIDO">
            </InputRegistro>

            <InputRegistro 
            id="contraseña" 
            name="password" 
            type="text"
            value={actualValue.password}
            onChange={handleChange}
            text="CONTRASEÑA">
            </InputRegistro>

            <InputRegistro 
            id="contraseña" 
            name="password" 
            type="text"
            value={actualValue.password_repeat}
            onChange={handleChange}
            text="REPETIR CONTRASEÑA">
            </InputRegistro>

            <ButtonPag 
            text="ACEPTAR"
            clr="bg-button2"
            clrText="button"
            width="w-full"
            onClick={handleSubmit}
            border="border-2 border-solid border-button2"
            hoverButton="hover:bg-white hover:border-button2 hover:text-button2"
            ></ButtonPag>
        </div>

    </>
        
    )
}

export default InfoUser