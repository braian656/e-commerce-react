import { useContext } from "react"
import InputRegistro from "./InputRegistro"
import PicPerfil from "./PicPerfil"
import { contextProducts } from "../context/context"
import ButtonPag from "../buttons-component/ButtonPag"

function InfoUser({actualUser}){
    const {picUser} = useContext(contextProducts)

    function handleChange(evt){
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
            ...dataUser,
            [name]: value
        };
        setDataUser(newValues);        
}

    return(
    <>

        {/* <h1 className="text-center font-bold text-4xl mb-3">Informacion Del usuario</h1> */}

        <div className="section-info p-5 rounded-md">
            {/* Arreglar el puto footer */}
            <PicPerfil picUser={picUser}></PicPerfil>
            <InputRegistro 
            id="nombre" 
            name="nombre" 
            type="text"
            value={actualUser.name}
            onChange={handleChange}
            text="NOMBRE DEL USUARIO">
            </InputRegistro>


            <InputRegistro 
            id="apellido" 
            name="apellido" 
            type="text"
            value={actualUser.surname}
            text="APELLIDO">
            </InputRegistro>

            <InputRegistro 
            id="contraseña" 
            name="password" 
            type="text"
            value={actualUser.password}
            text="CONTRASEÑA">
            </InputRegistro>

            <ButtonPag 
            text="ACEPTAR"
            clr="bg-button2"
            clrText="button"
            width="w-full"
            ></ButtonPag>
        </div>
       
        {/* <InputRegistro 
        id="nombre" 
        name="nombre" 
        type="text"
        value="Nombre DEl usuario"
        text="NOMBRE DEL USUARIO">
        </InputRegistro> */}

    </>
        
    )
}

export default InfoUser