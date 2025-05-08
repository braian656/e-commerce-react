import ButtonPag from "../buttons-component/ButtonPag"
import { useNavigate } from "react-router-dom"
import {X} from 'lucide-react'


// Verificar uso del los useHooks - check

function Error ({visible, messageModal, txtButton,actualUser,colorBtn, image,title, handleModal}){
    const navigate = useNavigate()

    const pageSignIn = ()=>{
        navigate("/SignIn")
    }

    // const visibility = visible ? 'flex' : 'hidden'


    console.log('COMPONENTE ERROR')
    return (
        <article className={`modal-info`}>    
            <div className="content relative w-full">
                <span 
                onClick={handleModal} 
                className="close-modal bg-button2 p-3 pointer">
                    <X />
                </span>
                <div className="content-img">
                    <img 
                    className="w-24 h-24 object-cover" 
                    src={image} 
                    alt={image}
                    loading="lazy" />
                </div>           
                <div className="content-info">
                    <h1 className="title text-4xl text-white mb-2">
                        {title}
                    </h1>
                    <h2 className="text-extrabold text-text font-xlg">
                        {messageModal}
                    </h2>
                    {/* <ButtonPag 
                    text={txtButton} 
                    onClick={actualUser != null ? handleModal : pageSignIn} 
                    clr={colorBtn}
                    clrText="white">
                    </ButtonPag> */}
                </div>
            </div>
        </article>
    )


}


export default Error

