import ButtonPag from "../buttons-component/ButtonPag"

function PicPerfil({picUser}){

    
    return(
        <>
        <div className="pic-content flex justify-center items-center flex-col">
            <div className="actual-pic">
                <img src={picUser} alt="" />
            </div>
            <ButtonPag 
            text="CAMBIAR FOTO DE PERFIL"
            clr="bg-button" 
            clrText="white" 
            width="200px">
            </ButtonPag>
        </div>
        </>
    )
}


export default PicPerfil