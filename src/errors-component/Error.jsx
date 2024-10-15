import ButtonPag from "../buttons-component/ButtonPag"
import { useNavigate } from "react-router-dom"

function Error ({visible, setVisible, messageModal, txtButton,actualUser,colorBtn}){
    const navigate = useNavigate()

    const closeModal = ()=>{
        setVisible(!visible)
    }

    const pageSignIn = ()=>{
        navigate("/SignIn")
    }


    const visibility = visible ? 'flex' : 'hidden'
    
    return (
        <article className={`${visibility} w-80 h-80 bg-white absolute top[50%] left[50%] p-3 border-5 border-solid border-button2 rounded-md flex justify-between items-center flex-col`}>
            <h2 className="logo text-red-500 text-center font-extrabold">E-comm</h2>
            <h1 className="text-extrabold text-text font-xlg">
                {messageModal}
            </h1>
            <ButtonPag 
            text={txtButton} 
            onClick={actualUser != null ? closeModal : pageSignIn} 
            clr={colorBtn}>
            </ButtonPag>
        </article>
    )


}


export default Error

