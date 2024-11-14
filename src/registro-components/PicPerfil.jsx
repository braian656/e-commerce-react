import ButtonPag from "../buttons-component/ButtonPag"

function PicPerfil({picUser}){

    
    return(
        <>
        <div className="pic-content">
            <div className="actual-pic">
                <img src={picUser} alt="" />
            </div>
            <button className="profile-button">
                CAMBIAR FOTO
            </button>
        </div>
        </>
    )
}


export default PicPerfil