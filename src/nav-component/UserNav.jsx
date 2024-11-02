import { useContext } from "react"
import { contextProducts } from "../context/context"

function UserNav({actualUser, setUserLog,setActualUser}){
    const {picUser} = useContext(contextProducts)
   
    return(

        <div className="user p-1 mx-2 flex justify-center items-center z-90 transition ease-in-out">
            <h2 className="hidden sm:flex text-white text-center font-normal">{actualUser.name + ' ' + actualUser.surname}</h2>
            <div className="pic w-[40px] h-[40px] overflow-hidden rounded-full ml-2">
                <img className="h-full w-full" src={picUser} alt="usuario-img"/>
            </div>

        </div>

    )
}

export default UserNav