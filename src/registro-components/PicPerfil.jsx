import ButtonPag from "../buttons-component/ButtonPag"
// Verificar uso del los useHooks - check

function PicPerfil({picUser}){

    console.log('COMPONENT PICPERFIL')
    return(
        <>
        <div className="pic-content">
            <div className="actual-pic">
                <img src={picUser} alt="" loading="lazy"/>
            </div>
            <button className="profile-button">
                CAMBIAR FOTO
            </button>
        </div>
        </>
    )
}


export default PicPerfil