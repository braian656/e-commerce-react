


function DashboardUser({setSliderActive,setUserLog, actualUser, setActualUser}){


    function signOut(){
        setActualUser(
            {
            name: "",
            surname: '',
            email: '',
            password: '',
            password_repeat: '',
            }
        )


        setUserLog(false)


    }

    setSliderActive(false)

    return(
                
        <section className="bg-body flex justify-center items-center flex-col relative">
            <article className="user p-2">
            <div className="img h-52 w-52 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://i.pinimg.com/564x/52/1d/f6/521df6ecd68b081a175122b5b7477ba7.jpg" alt="" />
            </div>
            <div className="name mt-10">
                <h1 className="font-bold text-center">{actualUser.name + ' ' + actualUser.surname}</h1>
            </div>
            </article>
        
            <div className="cart-register w-full  p-2 sm:w-2/5 mt-10">
                <div className="p-1.5 compras h-9 border-solid border border-slate-500 rounded-md my-3 flex justify-between items-center">
                <h1>Item</h1>
                <p className="total">$0</p>
                </div>
                <div className="p-1.5 total h-9	border-solid border border-slate-500 rounded-md flex justify-between items-center">
                <h1>Item</h1>
                <p className="total">$0</p>
                </div>
            </div>
        
            <button 
            className="mt-3
            w-1/2
            text-button
            font-bold
            bg-button2
            p-3 sm:w-2/5
            ease-out duration-700
            hover:bg-white hover:text-text"
            onClick={signOut}>
                Cerrar Cuenta
            </button>

        </section>

    )
}

export default DashboardUser