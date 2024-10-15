function UserNav({actualUser, setUserLog,setActualUser}){

   
    return(

        <div className="User py-3 flex items-center z-90 transition ease-in-out">
            <h2 className="text-white font-medium mr-5">{actualUser.name + ' ' + actualUser.surname}</h2>
            <div className="pic w-[40px] h-[40px] overflow-hidden rounded-md">
                {/* <img className="h-full w-full" src="https://i.pinimg.com/564x/d3/b0/fc/d3b0fc8b58bf0f37e96a2bfc372d7fde.jpg" alt="usuario-img"/> */}
            </div>

        </div>

    )
}

export default UserNav